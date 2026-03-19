// API types and utilities for the podcast episodes section

export interface VideoSnippet {
  title: string;
  description: string;
  thumbnails: {
    maxres?: { url: string };
    standard?: { url: string };
    high?: { url: string };
    medium?: { url: string };
    default?: { url: string };
  };
  resourceId: { videoId: string };
  publishedAt: string;
}

export interface VideoItem {
  snippet: VideoSnippet;
  contentDetails?: { videoPublishedAt: string };
}

export interface AllVideosResponse {
  items: VideoItem[];
}

export interface CategorizedPlaylistsResponse {
  playlists: Record<string, VideoItem[]>;
}

const ALL_VIDEOS_URL = "https://billowing-block-86e0.mykyta-3c4.workers.dev";
const CATEGORIZED_URL = "https://youtube-lists.kaleriia-pohorielova.workers.dev";

export async function fetchAllVideos(): Promise<VideoItem[]> {
  const res = await fetch(ALL_VIDEOS_URL);
  if (!res.ok) throw new Error("Failed to fetch videos");
  const data: AllVideosResponse = await res.json();
  return data.items;
}

export async function fetchCategorizedPlaylists(): Promise<Record<string, VideoItem[]>> {
  const res = await fetch(CATEGORIZED_URL);
  if (!res.ok) throw new Error("Failed to fetch playlists");
  const data: CategorizedPlaylistsResponse = await res.json();
  return data.playlists;
}

const GERMAN_MONTHS = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

export function formatGermanDate(isoString: string): string {
  const d = new Date(isoString);
  const day = String(d.getDate()).padStart(2, "0");
  const month = GERMAN_MONTHS[d.getMonth()];
  const year = d.getFullYear();
  return `${day}. ${month} ${year}`;
}

export function getYouTubeThumbnail(item: VideoItem): string {
  const t = item.snippet.thumbnails;
  return t.maxres?.url || t.standard?.url || t.high?.url || t.medium?.url || t.default?.url || "";
}

export const PLAYLIST_MAP: Record<string, string> = {
  "financial-education": "PLG87q07OrLsjuXiPN_pp8GCMBMsMYd1Cu",
  "financial-strategies": "PLG87q07OrLshSB79POZwZ9lObyrJtH6RO",
  "financial-products": "PLG87q07OrLsikBoSL2s6XQVJj3JqTJRQp",
  "about-invest4kids": "PLG87q07OrLsiMn4BdaMYMwfBFgVJOAmv5",
  "mindset-motivation": "PLG87q07OrLsgKO4vl8w9KPvl1WW-rKzVg",
  "saving-budgeting": "PLG87q07OrLsiqLksfGmGE7n6gOjFdu-9-",
  "investment-basics": "PLG87q07OrLsi9-y0LNSdcYNdrU8Cilbfc",
};

export const CATEGORY_LABELS: { key: string; label: string }[] = [
  { key: "financial-education", label: "Finanzielle Erziehung" },
  { key: "financial-strategies", label: "Strategien" },
  { key: "financial-products", label: "Produkte" },
  { key: "about-invest4kids", label: "Über Invest4Kids" },
  { key: "mindset-motivation", label: "Mindset" },
  { key: "saving-budgeting", label: "Sparen" },
  { key: "investment-basics", label: "Grundlagen" },
];
