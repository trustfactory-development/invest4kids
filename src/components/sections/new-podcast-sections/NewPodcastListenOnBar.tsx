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

export default function NewPodcastListenOnBar() {
  return (
    <section className="flex w-full flex-col items-center bg-primary px-5 py-[34px] lg:px-[30px]">
      <div className="flex w-full max-w-[1100px] flex-row flex-wrap items-center justify-center gap-10">
        <h2 className="whitespace-nowrap font-poppins text-base font-semibold text-white">
          Jetzt anhören auf
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-[30px]">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.ariaLabel}
              className="flex items-center hover:text-accent duration-300 text-white"
            >
              <p.Logo />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
