import type { ProfileMode } from "@/features/profile/types/profile-mode";

/**
 * Which profile variant the site shows: "fullstack" or "cto".
 * Change it with `pnpm profile:mode <fullstack|cto>`, then commit and push.
 */
export const PROFILE_MODE: ProfileMode = "fullstack";
