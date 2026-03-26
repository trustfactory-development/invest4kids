import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import type { NextRequest } from "next/server";
import { getLocalVideo } from "@/lib/localVideos";

export const runtime = "nodejs";

const CACHE_CONTROL = "public, max-age=31536000, s-maxage=31536000, immutable";

function toWebStream(stream: ReturnType<typeof createReadStream>) {
  return Readable.toWeb(stream) as ReadableStream<Uint8Array>;
}

function buildBaseHeaders(contentType: string, contentLength: number) {
  return {
    "Accept-Ranges": "bytes",
    "Cache-Control": CACHE_CONTROL,
    "Content-Length": contentLength.toString(),
    "Content-Type": contentType,
  };
}

function parseRangeHeader(rangeHeader: string, size: number) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader);
  if (!match) return null;

  const [, startValue, endValue] = match;

  if (!startValue && !endValue) return null;

  if (!startValue) {
    const suffixLength = Number(endValue);
    if (!Number.isFinite(suffixLength) || suffixLength <= 0) return null;
    const start = Math.max(size - suffixLength, 0);
    return { start, end: size - 1 };
  }

  const start = Number(startValue);
  const end = endValue ? Number(endValue) : size - 1;

  if (
    !Number.isFinite(start) ||
    !Number.isFinite(end) ||
    start < 0 ||
    end < start ||
    start >= size
  ) {
    return null;
  }

  return { start, end: Math.min(end, size - 1) };
}

async function getVideoResponse(
  request: NextRequest,
  id: string,
  includeBody: boolean
) {
  const video = getLocalVideo(id);

  if (!video) {
    return new Response("Not found", { status: 404 });
  }

  const absoluteFilePath = path.join(process.cwd(), video.filePath);
  const fileStats = await stat(absoluteFilePath);
  const rangeHeader = request.headers.get("range");

  if (!rangeHeader) {
    const headers = buildBaseHeaders(video.contentType, fileStats.size);
    if (!includeBody) {
      return new Response(null, { status: 200, headers });
    }

    return new Response(toWebStream(createReadStream(absoluteFilePath)), {
      status: 200,
      headers,
    });
  }

  const range = parseRangeHeader(rangeHeader, fileStats.size);

  if (!range) {
    return new Response("Range Not Satisfiable", {
      status: 416,
      headers: {
        "Accept-Ranges": "bytes",
        "Cache-Control": CACHE_CONTROL,
        "Content-Range": `bytes */${fileStats.size}`,
      },
    });
  }

  const contentLength = range.end - range.start + 1;
  const headers = {
    ...buildBaseHeaders(video.contentType, contentLength),
    "Content-Range": `bytes ${range.start}-${range.end}/${fileStats.size}`,
  };

  if (!includeBody) {
    return new Response(null, { status: 206, headers });
  }

  return new Response(
    toWebStream(
      createReadStream(absoluteFilePath, {
        start: range.start,
        end: range.end,
      })
    ),
    {
      status: 206,
      headers,
    }
  );
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  return getVideoResponse(request, id, true);
}

export async function HEAD(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  return getVideoResponse(request, id, false);
}
