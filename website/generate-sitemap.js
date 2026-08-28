import fs from "fs";
import path from "path";
import { advocacyProjects } from "./src/components/pages/Home/items.js";
import { team } from "./src/components/pages/AboutUs/items.js";
import { articles } from "./src/components/pages/Resources/items.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://intersexnigeria.org";

function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

const staticPages = [
  "",
  "/about-us/about-intersex-nigeria",
  "/about-us/meet-the-team",
  "/resources/epublications",
  "/resources/toolkit",
  "/resources/articles",
  "/resources/annual-reports",
  "/resources/programs",
  "/contact",
  "/gallery",
  "/news",
  "/career/join-the-team",
];

const dynamicAdvocacyPages = advocacyProjects.map(
  (project) => `/programs/${slugify(project.title)}`
);
const dynamicTeamPages = team.map(
  (person) => `/meet-the-team/${slugify(person.name)}`
);
const dynamicArticlePages = articles.map(
  (article) => `/articles/${slugify(article.title)}`
);

const allPages = [
  ...staticPages,
  ...dynamicAdvocacyPages,
  ...dynamicTeamPages,
  ...dynamicArticlePages,
];

const urls = allPages.map(
  (page) => `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

fs.writeFileSync(
  path.join(__dirname, "dist", "sitemap.xml"),
  sitemap.trim()
);
console.log("Sitemap generated!");
