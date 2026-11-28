import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { ShubhKWordmark } from "@/components/shubhk-wordmark";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title");

  const robotoCondensedMedium = await readFile(
    join(process.cwd(), "src/assets/fonts/RobotoCondensed-Medium.ttf")
  );

  return new ImageResponse(
    (
      <div tw="w-full h-full flex items-center justify-center text-white bg-black p-16">
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 left-16" />
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 right-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 top-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 bottom-16" />

        <div tw="absolute flex bottom-20 right-20">
          <ShubhKWordmark
            // The artwork spans x 0-1122 of the component's 2048-wide box;
            // crop to it so the wordmark lines up with its container edges.
            viewBox="0 0 1122 258"
            width={224}
            height={52}
          />
        </div>

        <h1
          tw="text-center font-medium"
          style={{
            fontFamily: "RobotoCondensed",
            fontSize: 64,
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "RobotoCondensed",
          data: robotoCondensedMedium,
          weight: 500,
        },
      ],
    }
  );
}
