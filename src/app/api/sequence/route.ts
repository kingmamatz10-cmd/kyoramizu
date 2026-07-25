import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const publicSeqDir = path.join(process.cwd(), "public", "sequence");
    const rootSeqDir = path.join(process.cwd(), "sequence");

    const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

    // Ensure public/sequence directory exists
    if (!fs.existsSync(publicSeqDir)) {
      try {
        fs.mkdirSync(publicSeqDir, { recursive: true });
      } catch (err) {
        console.error("Could not create public/sequence dir:", err);
      }
    }

    // Check if public/sequence already has images
    let files: string[] = [];
    if (fs.existsSync(publicSeqDir)) {
      try {
        files = fs.readdirSync(publicSeqDir);
      } catch (err) {
        console.error("Error reading public/sequence dir:", err);
      }
    }

    const hasPublicImages = files.some((f) => imageExtensions.has(path.extname(f).toLowerCase()));

    // If public/sequence has no valid images, but root sequence directory exists, safely copy images
    if (!hasPublicImages && fs.existsSync(rootSeqDir)) {
      try {
        const rootFiles = fs.readdirSync(rootSeqDir);
        for (const file of rootFiles) {
          const ext = path.extname(file).toLowerCase();
          if (imageExtensions.has(ext)) {
            const srcPath = path.join(rootSeqDir, file);
            const destPath = path.join(publicSeqDir, file);
            try {
              if (fs.existsSync(srcPath) && fs.statSync(srcPath).isFile()) {
                fs.copyFileSync(srcPath, destPath);
              }
            } catch (copyErr) {
              console.error(`Error copying ${file}:`, copyErr);
            }
          }
        }
        if (fs.existsSync(publicSeqDir)) {
          files = fs.readdirSync(publicSeqDir);
        }
      } catch (err) {
        console.error("Error checking root sequence dir:", err);
      }
    }

    // Filter valid image files and perform natural alphanumeric sort
    const validImages = files
      .filter((file) => {
        try {
          const filePath = path.join(publicSeqDir, file);
          return (
            imageExtensions.has(path.extname(file).toLowerCase()) &&
            fs.existsSync(filePath) &&
            fs.statSync(filePath).isFile()
          );
        } catch {
          return false;
        }
      })
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
      .map((file) => `/sequence/${file}`);

    return NextResponse.json(
      {
        images: validImages,
        totalFrames: validImages.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in /api/sequence GET route:", error);
    return NextResponse.json(
      {
        images: [],
        totalFrames: 0,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 200 }
    );
  }
}
