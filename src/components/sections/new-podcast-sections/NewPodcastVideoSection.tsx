"use client";

import { useState } from "react";
import { VideoPlayOverlay } from "./PodcastIcons";

export default function NewPodcastVideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="pc-section pc-video">
      <div className="pc-section-inner">
        <div className="pc-video-wrapper">
          <div className="pc-video-inner">
            <div className="pc-video-player">
              {playing ? (
                <iframe
                  src="https://player.vimeo.com/video/116216272?autoplay=1"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="WER iST iNVEST4KiDS?"
                />
              ) : (
                <div
                  className="pc-video-overlay"
                  style={{ backgroundImage: "url(/podcast/video-thumb.webp)" }}
                  onClick={() => setPlaying(true)}
                  role="button"
                  aria-label="Video abspielen über WER iST iNVEST4KiDS?"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setPlaying(true); }}
                >
                  <VideoPlayOverlay />
                </div>
              )}
            </div>
            <div className="pc-video-text-card">
              <p>Wir sind Invest4Kids</p>
              <p>
                Erhalte einen Einblick in unser Büro in Kiel und sieh, wie wir Eltern mit Expertise und Leidenschaft unterstützen.
              </p>
              <p>Unser Standort: Fabrikstraße 7, 24103 Kiel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
