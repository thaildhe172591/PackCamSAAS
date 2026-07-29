import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import { NextResponse } from "next/server";

const bundledInstallerPath = path.join(
  process.cwd(),
  "public",
  "downloads",
  "PackCam_0.4.0_x64-setup.exe",
);

const localInstallerPath =
  "D:\\DevProjects\\PackCam\\src-tauri\\target\\release\\bundle\\nsis\\PackCam_0.4.0_x64-setup.exe";

export async function GET() {
  const installerPath = existsSync(bundledInstallerPath)
    ? bundledInstallerPath
    : localInstallerPath;

  if (!existsSync(installerPath)) {
    return new NextResponse("Windows installer not found.", {
      status: 404,
    });
  }

  const fileName = path.basename(installerPath);
  const fileStat = await stat(installerPath);
  const stream = createReadStream(installerPath);

  return new NextResponse(
    Readable.toWeb(stream) as unknown as ReadableStream,
    {
      headers: {
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Content-Length": fileStat.size.toString(),
        "Content-Type": "application/octet-stream",
        "Cache-Control": "no-store",
      },
    },
  );
}
