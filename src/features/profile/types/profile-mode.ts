export const PROFILE_MODES = ["fullstack", "cto"] as const;

export type ProfileMode = (typeof PROFILE_MODES)[number];
