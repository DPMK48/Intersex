// replace-image-paths.js
import fs from "fs";
import glob from "fast-glob";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mappingPath = path.join(__dirname, "cloudinary-image-map.json");

if (!fs.existsSync(mappingPath)) {
  console.error("❌ cloudinary-image-map.json not found.");
  process.exit(1);
}

const imageMap = JSON.parse(fs.readFileSync(mappingPath, "utf-8"));
const files = await glob(["src/**/*.{js,jsx,ts,tsx}"]);

let totalUpdated = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf-8");
  let original = content;

  for (const [localPath, cloudinaryUrl] of Object.entries(imageMap)) {
    // Escape for regex
    const safeLocalPath = localPath.replace(
      /[.*+?^${}()|\\]/g,
      "\\$&"
    );
    // Match: not after cloudinary.com, optional quote, then the path
    const pattern = new RegExp(
      `(?<!cloudinary.com[^"'\\(\\{\\[\\s]*)(['"]?)(.?/?images/${safeLocalPath})`,
      "g"
    );
    content = content.replace(pattern, (match, quote, path) => {
      // Only replace if not already the Cloudinary URL
      if (path === cloudinaryUrl) return match;
      return `${quote}${cloudinaryUrl}`;
    });
  }

  if (content !== original) {
    fs.writeFileSync(file, content, "utf-8");
    console.log(`✅ Updated: ${file}`);
    totalUpdated++;
  }
}

console.log(`\nDone. Files updated: ${totalUpdated}`);
