import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import profileModeTypes from "../features/profile/types/profile-mode.ts";

const { PROFILE_MODES } = profileModeTypes;

const CONFIG_PATH = path.join(process.cwd(), "src/config/profile-mode.ts");
const MODE_LINE = /^export const PROFILE_MODE: ProfileMode = "[^"]*";$/m;

const mode = process.argv[2];

if (!PROFILE_MODES.some((m) => m === mode)) {
  console.error(
    `Usage: pnpm profile:mode <${PROFILE_MODES.join("|")}>\nGot: ${mode ?? "(nothing)"}`
  );
  process.exit(1);
}

const source = readFileSync(CONFIG_PATH, "utf8");

if (!MODE_LINE.test(source)) {
  console.error(`Could not find the PROFILE_MODE line in ${CONFIG_PATH}`);
  process.exit(1);
}

writeFileSync(
  CONFIG_PATH,
  source.replace(
    MODE_LINE,
    `export const PROFILE_MODE: ProfileMode = "${mode}";`
  )
);
console.log(`Profile mode set to "${mode}" in src/config/profile-mode.ts`);
