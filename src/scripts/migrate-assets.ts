import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { put } from "@vercel/blob";
import fs from "fs";
import { glob } from "glob";
import path from "path";

// Configuration
const OLD_ASSET_DOMAIN = "https://assets.chanhdai.com";
const NEW_ASSET_DOMAIN_PLACEHOLDER = "https://assets.shubhk.me";
const SOURCE_DIR = "src"; // Scan source code

async function findAssetUrls() {
  const files = await glob(`${SOURCE_DIR}/**/*.{ts,tsx,mdx,json}`, {
    nodir: true,
  });
  const urls = new Set<string>();

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    // Regex to find all assets.shubhk.me URLs
    const regex = /https:\/\/assets\.shubhk\.me\/[^"'\)\s\>]+/g;
    const matches = content.match(regex);
    if (matches) {
      matches.forEach((url) => urls.add(url));
    }
  }
  return Array.from(urls);
}

async function uploadAsset(url: string) {
  // Convert new domain placeholder back to old domain to fetch the file
  const oldUrl = url.replace(NEW_ASSET_DOMAIN_PLACEHOLDER, OLD_ASSET_DOMAIN);
  const pathname = new URL(url).pathname; // e.g., /images/blog/foo.png
  // Remove leading slash for Blob path if needed, but usually it's fine.
  // Blob 'pathname' argument sets the filename.
  const blobPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;

  console.log(`Downloading: ${oldUrl}`);
  try {
    const response = await fetch(oldUrl);
    if (!response.ok) {
      console.error(`Failed to fetch ${oldUrl}: ${response.statusText}`);
      return null;
    }
    const blob = await response.blob();

    console.log(`Uploading to Blob: ${blobPath}`);
    const { url: newBlobUrl } = await put(blobPath, blob, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    console.log(`Success: ${newBlobUrl}`);
    return { originalUrl: url, blobUrl: newBlobUrl };
  } catch (error) {
    console.error(`Error processing ${url}:`, error);
    return null;
  }
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("Error: BLOB_READ_WRITE_TOKEN is not defined in .env");
    process.exit(1);
  }

  console.log("Scanning for assets...");
  const urls = await findAssetUrls();
  console.log(`Found ${urls.length} unique assets.`);

  for (const url of urls) {
    await uploadAsset(url);
  }

  console.log("\nMigration complete!");
  console.log(
    "Note: If you are using a custom domain (assets.shubhk.me), ensure your Next.js rewrites point to your Vercel Blob base URL."
  );
}

main();
