"use client";

import { useState, useEffect, useCallback } from "react";
import {
  fetchAllVideos,
  fetchCategorizedPlaylists,
  formatGermanDate,
  getYouTubeThumbnail,
  PLAYLIST_MAP,
  CATEGORY_LABELS,
  type VideoItem,
} from "./podcastApi";
import { PlayTriangleIcon } from "./PodcastIcons";
import Image from "next/image";

const TABS = ["Neueste", "Beliebte", "Nach Thema"];

const POPULAR_VIDEO_IDS = [
  "1iKyv78xcRw",
  "XkZpi7SJcCc",
  "i6uknB4z9rM",
  "QxIpKr7GKWI",
  "dWxPF3xKo1E",
  "bXxp6zflJKU",
];

function PodcastEpisodeCard({ item }: { item: VideoItem }) {
  const videoId = item.snippet.resourceId.videoId;
  const thumb = getYouTubeThumbnail(item);
  const date = formatGermanDate(
    item.contentDetails?.videoPublishedAt || item.snippet.publishedAt
  );

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white border border-white">
      <div className="relative aspect-video overflow-hidden">
        <Image src={thumb} alt={item.snippet.title} loading="lazy" className="block h-full w-full object-cover" width={640} height={480} />
        <div className="absolute w-full flex items-end justify-start h-2/3 left-0 bottom-0 z-30 bg-linear-to-t from-primary to-transparent px-4 py-2">
          <p className="font-outfit text-[12px] text-white ml-5 mb-1">{date}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-4 flex-1 font-poppins text-base font-bold leading-[1.4] text-text-dark">
          {item.snippet.title}
        </h3>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-2.5 font-outfit text-sm font-medium text-text-medium no-underline transition-colors duration-200 hover:border-primary hover:text-primary"
        >
          <PlayTriangleIcon />
          <span>Jetzt anhören</span>
        </a>
      </div>
    </div>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center py-[60px]">
      <div className="h-[49px] w-[49px] animate-spin rounded-full border-4 border-white/25 border-t-white" />
    </div>
  );
}

function EpisodeGrid({
  items,
  showAll,
  onToggle,
  showAllLabel,
  hideLabel,
}: {
  items: VideoItem[];
  showAll: boolean;
  onToggle: () => void;
  showAllLabel: string;
  hideLabel: string;
}) {
  const visible = showAll ? items : items.slice(0, 3);
  return (
    <>
      <div className="mx-auto mb-10 grid max-w-[480px] grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
        {visible.map((item) => (
          <PodcastEpisodeCard
            key={item.snippet.resourceId.videoId}
            item={item}
          />
        ))}
      </div>
      {items.length > 3 && (
        <div className="flex justify-center">
          <button
            className="inline-flex cursor-pointer items-center rounded-full border border-white bg-transparent px-8 py-3 font-outfit text-[16px] md:text-[18px] font-medium text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            onClick={onToggle}
          >
            {showAll ? hideLabel : showAllLabel}
          </button>
        </div>
      )}
    </>
  );
}

function NeusteTab() {
  const [items, setItems] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchAllVideos()
      .then((data) => {
        const filtered = data.filter(
          (v) => v.snippet.title !== "Private video"
        );
        setItems(filtered);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error)
    return (
      <p className="py-10 text-center font-outfit text-base text-white/70">
        Episoden konnten nicht geladen werden.
      </p>
    );
  if (items.length === 0)
    return (
      <p className="py-10 text-center font-outfit text-base text-white/70">
        Keine Episoden verfügbar.
      </p>
    );

  return (
    <EpisodeGrid
      items={items}
      showAll={showAll}
      onToggle={() => setShowAll((v) => !v)}
      showAllLabel="Alle Folgen ansehen"
      hideLabel="Weniger anzeigen"
    />
  );
}

function BeliebtTab() {
  const [items, setItems] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchAllVideos()
      .then((data) => {
        const popular = data.filter((v) =>
          POPULAR_VIDEO_IDS.includes(v.snippet.resourceId.videoId)
        );
        setItems(popular);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error)
    return (
      <p className="py-10 text-center font-outfit text-base text-white/70">
        Episoden konnten nicht geladen werden.
      </p>
    );
  if (items.length === 0)
    return (
      <p className="py-10 text-center font-outfit text-base text-white/70">
        Keine Episoden verfügbar.
      </p>
    );

  return (
    <EpisodeGrid
      items={items}
      showAll={showAll}
      onToggle={() => setShowAll((v) => !v)}
      showAllLabel="Alle anzeigen"
      hideLabel="Weniger anzeigen"
    />
  );
}

function NachThemaTab() {
  const [activeCategory, setActiveCategory] = useState(CATEGORY_LABELS[0].key);
  const [playlistData, setPlaylistData] = useState<Record<string, VideoItem[]>>({});
  const [loadingCategories, setLoadingCategories] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(false);

  const loadCategory = useCallback(
    async (categoryKey: string) => {
      if (playlistData[categoryKey]) return;

      setLoadingCategories((prev) => new Set(prev).add(categoryKey));
      try {
        const data = await fetchCategorizedPlaylists();
        const playlistId = PLAYLIST_MAP[categoryKey];
        const items = (data[playlistId] || []).filter(
          (v) => v.snippet.title !== "Private video"
        );
        setPlaylistData((prev) => ({ ...prev, [categoryKey]: items }));
      } catch {
        setError(true);
      } finally {
        setLoadingCategories((prev) => {
          const next = new Set(prev);
          next.delete(categoryKey);
          return next;
        });
      }
    },
    [playlistData]
  );

  useEffect(() => {
    loadCategory(activeCategory);
  }, [activeCategory, loadCategory]);

  const currentItems = playlistData[activeCategory] || [];
  const isLoading = loadingCategories.has(activeCategory);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        {CATEGORY_LABELS.map((cat) => (
          <button
            key={cat.key}
            className={`cursor-pointer rounded-full border px-5 py-2 font-outfit text-sm font-medium transition-all duration-200 ${
              activeCategory === cat.key
                ? "border-white bg-white font-semibold text-primary"
                : "border-white/30 bg-transparent text-white/70 hover:border-white/60 hover:text-white/90"
            }`}
            onClick={() => {
              setActiveCategory(cat.key);
              setShowAll(false);
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className="py-10 text-center font-outfit text-base text-white/70">
          Episoden konnten nicht geladen werden.
        </p>
      ) : currentItems.length === 0 ? (
        <p className="py-10 text-center font-outfit text-base text-white/70">
          Keine Episoden in dieser Kategorie.
        </p>
      ) : (
        <EpisodeGrid
          items={currentItems}
          showAll={showAll}
          onToggle={() => setShowAll((v) => !v)}
          showAllLabel="Alle anzeigen"
          hideLabel="Weniger anzeigen"
        />
      )}
    </>
  );
}

const TAB_HEADERS: Record<number, { title: string; subtitle: string }> = {
  0: { title: "Neueste Episoden", subtitle: "Hör direkt in unsere neuesten Folgen rein" },
  1: { title: "Beliebte Episoden", subtitle: "Die Folgen, die am meisten gehört werden" },
  2: { title: "Episoden nach Thema", subtitle: "Finde Folgen zu dem Thema, das dich interessiert" },
};

export default function NewPodcastEpisodesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const header = TAB_HEADERS[activeTab];

  return (
    <section className="flex w-full flex-col items-center bg-linear-to-l from-[#006F99] to-primary px-5 py-[50px] lg:px-[30px] lg:py-[100px]">
      <div className="flex w-full max-w-[1100px] flex-col">
        {/* Tabs */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-white/10 p-4 md:gap-x-9">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                className={`cursor-pointer rounded-full px-4 py-1.5 font-outfit text-[15px] md:text-[18px] transition-all duration-200 hover:bg-accent hover:text-primary ${
                  i === activeTab
                    ? "bg-accent text-primary shadow-md"
                    : "bg-transparent text-white/80"
                }`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-poppins text-[26px] font-extrabold text-white sm:text-[32px]">
            {header.title}
          </h2>
          <p className="font-outfit text-base text-white/80">
            {header.subtitle}
          </p>
        </div>

        {activeTab === 0 && <NeusteTab />}
        {activeTab === 1 && <BeliebtTab />}
        {activeTab === 2 && <NachThemaTab />}
      </div>
    </section>
  );
}
