import type { MetadataRoute } from "next";

import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { USER } from "@/features/profile/data/user";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: USER.firstName,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    lang: "en-IN",
    icons: [
      {
        src: "/icons/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/icons/maskable-512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    theme_color: META_THEME_COLORS.light,
    background_color: META_THEME_COLORS.light,
    screenshots: [
      {
        src: "/screenshots/mobile-dark.webp",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
        label: "Profile, dark theme, mobile",
      },
      {
        src: "/screenshots/mobile-light.webp",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
        label: "Profile, light theme, mobile",
      },
      {
        src: "/screenshots/desktop-dark.webp",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
        label: "Profile, dark theme, desktop",
      },
      {
        src: "/screenshots/desktop-light.webp",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
        label: "Profile, light theme, desktop",
      },
    ],
  };
}
