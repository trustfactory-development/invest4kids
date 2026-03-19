"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayTriangleIcon } from "./PodcastIcons";

const EPISODES = [
  {
    id: 72,
    title: "#72 Warum SPARBÜCHER deinen Kindern Geld kosten & was du BESSER machen kannst",
    date: "30. Januar 2026",
    thumb: "/podcast/episode-72.jpg",
    url: "https://www.youtube.com/watch?v=1iKyv78xcRw",
  },
  {
    id: 71,
    title: "#71 Jetzt Starten, statt Warten! Warum frühes Investieren alles für dein Kind verändert!",
    date: "16. Januar 2026",
    thumb: "/podcast/episode-71.jpg",
    url: "https://www.youtube.com/watch?v=XkZpi7SJcCc",
  },
  {
    id: 70,
    title: "#70 Tagesgeldkonto: Wann es Sinn macht und wann nicht!",
    date: "02. Januar 2026",
    thumb: "/podcast/episode-70.jpg",
    url: "https://www.youtube.com/watch?v=i6uknB4z9rM",
  },
];

const TABS = ["Neueste", "Beliebte", "Nach Thema"];

export default function PodcastEpisodesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="pc-section pc-episodes">
      <div className="pc-section-inner">
        <div className="pc-tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`pc-tab${i === activeTab ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="pc-episodes-header">
          <h2>Neueste Episoden</h2>
          <p>Hör direkt in unsere neuesten Folgen rein</p>
        </div>

        <div className="pc-episodes-grid">
          {EPISODES.map((ep) => (
            <div key={ep.id} className="pc-episode-card">
              <div className="pc-episode-thumb">
                <Image src={ep.thumb} alt={ep.title} width={640} height={480} />
                <div className="pc-episode-date-overlay">
                  <p>{ep.date}</p>
                </div>
              </div>
              <div className="pc-episode-body">
                <h3>{ep.title}</h3>
                <a
                  href={ep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pc-episode-listen"
                >
                  <PlayTriangleIcon />
                  <span>Jetzt anhören</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pc-all-episodes">
          <a href="#">Alle Folgen ansehen</a>
        </div>
      </div>
    </section>
  );
}
