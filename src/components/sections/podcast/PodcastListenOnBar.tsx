import {
  YouTubeLogo,
  SpotifyLogo,
  ApplePodcastsLogo,
  AmazonMusicLogo,
  RTLPlusLogo,
  DeezerLogo,
} from "./PlatformLogos";

const PLATFORMS = [
  { name: "YouTube", href: "https://www.youtube.com/@invest4kids_official/featured", ariaLabel: "YouTube Kanal öffnen", Logo: YouTubeLogo },
  { name: "Spotify", href: "https://open.spotify.com/show/1250D6GILRDlZFw7mYwcvt?si=b6cbfe99f68c489d", ariaLabel: "Spotify öffnen", Logo: SpotifyLogo },
  { name: "Apple Podcasts", href: "https://podcasts.apple.com/de/podcast/kinderleicht-investieren/id1801991286", ariaLabel: "Apple Podcasts öffnen", Logo: ApplePodcastsLogo },
  { name: "Amazon Music", href: "https://music.amazon.de/podcasts/10d28682-5564-4a23-ab67-f0887d171cc7/kinderleicht-investieren", ariaLabel: "Amazon Music öffnen", Logo: AmazonMusicLogo },
  { name: "RTL+", href: "https://plus.rtl.de/podcast/kinderleicht-investieren-pfwl06ndea2w9", ariaLabel: "RTL Plus öffnen", Logo: RTLPlusLogo },
  { name: "Deezer", href: "https://link.deezer.com/s/31kbpa926DsRJnP8orc6d", ariaLabel: "Deezer öffnen", Logo: DeezerLogo },
];

export default function PodcastListenOnBar() {
  return (
    <section className="pc-section pc-listen-bar">
      <div className="pc-section-inner">
        <h2>Jetzt anhören auf</h2>
        <div className="pc-listen-bar-icons">
          {PLATFORMS.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.ariaLabel}>
              <p.Logo />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
