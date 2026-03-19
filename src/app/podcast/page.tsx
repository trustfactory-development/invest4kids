import type { Metadata } from "next";
import NewPodcastHeroSection from "@/components/sections/new-podcast-sections/NewPodcastHeroSection";
import NewPodcastListenOnBar from "@/components/sections/new-podcast-sections/NewPodcastListenOnBar";
import NewPodcastAboutSection from "@/components/sections/new-podcast-sections/NewPodcastAboutSection";
import NewPodcastEpisodesSection from "@/components/sections/new-podcast-sections/NewPodcastEpisodesSection";
import NewPodcastHostsSection from "@/components/sections/new-podcast-sections/NewPodcastHostsSection";
import NewPodcastCtaSection from "@/components/sections/new-podcast-sections/NewPodcastCtaSection";
import NewPodcastPlatformsSection from "@/components/sections/new-podcast-sections/NewPodcastPlatformsSection";
import MapVimeoSection from "@/components/sections/MapVimeoSection";

export const metadata: Metadata = {
  title: "KINDERleicht Investieren - Der Invest4Kids Podcast | ETFs",
  description:
    "KINDERleicht Investieren — der Podcast von Invest4Kids. Einfach erklärt, direkt umsetzbar. Jetzt reinhören auf Spotify, Apple Podcasts und mehr.",
};

export default function PodcastPage() {
  return (
    <main>
      <NewPodcastHeroSection />
      <NewPodcastListenOnBar />
      <NewPodcastAboutSection />
      <NewPodcastEpisodesSection />
      <NewPodcastHostsSection />
      <NewPodcastCtaSection />
      <NewPodcastPlatformsSection />
      <MapVimeoSection />
    </main>
  );
}
