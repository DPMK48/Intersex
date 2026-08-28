import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { advocacyProjects } from "./src/components/pages/Home/items";
import { team } from "./src/components/pages/AboutUs/items";
import { articles } from "./src/components/pages/Resources/items";
import Sitemap from "vite-plugin-sitemap";

const BASE_URL = "https://intersexnigeria.org";

export default defineConfig(() => {
  // Slugify helper function
  const slugify = (title) =>
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-"); // Replace spaces with dashes

  // Static pages
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

  // Dynamic pages
  const dynamicAdvocacyPages = advocacyProjects.map(
    (project) => `/programs/${slugify(project.title)}`
  );
  const dynamicTeamPages = team.map(
    (person) => `/meet-the-team/${slugify(person.name)}`
  );
  const dynamicArticlePages = articles.map(
    (article) => `/articles/${slugify(article.title)}`
  );

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...dynamicAdvocacyPages,
    ...dynamicTeamPages,
    ...dynamicArticlePages,
  ];

  // Vite config
  return defineConfig({
    server: {
      hmr: true,
    },
    plugins: [
      react(),
      Sitemap({
        hostname: BASE_URL,
        routes: allPages.map((page) => ({
          url: page,
          changefreq:
            page.startsWith("/articles") ||
            page.startsWith("/programs") ||
            page.startsWith("/news")
              ? "monthly"
              : "yearly",
          priority:
            page === ""
              ? 1.0
              : page.startsWith("/meet-the-team") ||
                page.startsWith("/career")
              ? 0.7
              : 0.9,
        })),
      }),
    ],
  });
});
