import fs from "fs";
import glob from "fast-glob";

const files = await glob(["src/**/*.{js,jsx,ts,tsx}"]);

let totalUpdated = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf-8");
  const original = content;

  // Regex: Find all Cloudinary URLs and insert f_auto if not present
  content = content.replace(
    /(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(?!.*f_auto)([^"')\s]+)/g,
    (match, p1, p2) => {
      // If f_auto is already present, skip
      if (p2.startsWith("f_auto/") || p2.includes("/f_auto/"))
        return match;
      return `${p1}f_auto/${p2}`;
    }
  );

  if (content !== original) {
    fs.writeFileSync(file, content, "utf-8");
    console.log(`✅ Updated: ${file}`);
    totalUpdated++;
  }
}

console.log(`\nDone. Files updated: ${totalUpdated}`);
