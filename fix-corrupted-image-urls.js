// fix-corrupted-image-urls.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import glob from "fast-glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePaths = await glob(["src/**/*.{js,jsx,ts,tsx}"], {
  cwd: __dirname,
  absolute: true,
});

let totalFixed = 0;

// Function to extract the last valid Cloudinary URL from a corrupted string
function extractLastCloudinaryUrl(corruptedUrl) {
  // Split by the Cloudinary domain to find all occurrences
  const parts = corruptedUrl.split("https://res.cloudinary.com/");

  if (parts.length <= 1) {
    return corruptedUrl; // Not a corrupted URL
  }

  // Find the last complete Cloudinary URL
  for (let i = parts.length - 1; i >= 1; i--) {
    const part = parts[i];
    // Look for the end of the URL (space, quote, parenthesis, etc.)
    const endMatch = part.match(/^[^\s'")]+/);
    if (endMatch) {
      return `https://res.cloudinary.com/${endMatch[0]}`;
    }
  }

  return corruptedUrl; // Fallback
}

// Function to fix corrupted URLs in a string
function fixCorruptedUrls(content) {
  // Find all strings that contain multiple Cloudinary URLs
  const cloudinaryUrlPattern =
    /https:\/\/res\.cloudinary\.com\/[^\s'")]+/g;
  const matches = content.match(cloudinaryUrlPattern);

  if (!matches) return content;

  // Check if any URL contains multiple Cloudinary domains (indicating corruption)
  const corruptedUrls = matches.filter(
    (url) =>
      (url.match(/https:\/\/res\.cloudinary\.com\//g) || []).length >
      1
  );

  if (corruptedUrls.length === 0) return content;

  let fixedContent = content;

  // Fix each corrupted URL
  corruptedUrls.forEach((corruptedUrl) => {
    const fixedUrl = extractLastCloudinaryUrl(corruptedUrl);
    if (fixedUrl !== corruptedUrl) {
      // Escape special regex characters in the corrupted URL
      const escapedCorruptedUrl = corruptedUrl.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );
      const regex = new RegExp(escapedCorruptedUrl, "g");
      fixedContent = fixedContent.replace(regex, fixedUrl);
    }
  });

  return fixedContent;
}

for (const file of filePaths) {
  let content = fs.readFileSync(file, "utf-8");
  const original = content;

  // Fix corrupted URLs
  content = fixCorruptedUrls(content);

  if (content !== original) {
    fs.writeFileSync(file, content, "utf-8");
    console.log(`🧼 Cleaned: ${path.relative(__dirname, file)}`);
    totalFixed++;
  }
}

console.log(`\n✅ Done. Files cleaned: ${totalFixed}`);