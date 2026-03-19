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

export default function NewPodcastPlatformsSection() {
  return (
    <section className="flex w-full flex-col items-center bg-primary px-5 py-[100px] lg:px-[30px]">
      <div className="flex w-full max-w-[1100px] flex-col">
        <div className="flex flex-col items-center gap-10 md:gap-[60px] lg:flex-row">
          <div className="min-w-0 flex-1">
            <h2 className="mb-4 font-poppins text-[26px] font-extrabold leading-[1.6] text-white sm:text-[32px]">
              Hör KINDERleicht Investieren auf deiner Lieblingsplattform
            </h2>
            <p className="font-outfit text-base leading-[1.6] text-white/80">
              Abonniere den Podcast auf deiner Lieblingsplattform, um keine Folge mehr zu verpassen.
            </p>
          </div>
          <div className="w-full md:w-auto grid grid-cols-1 gap-4 sm:grid-cols-2 justify-end items-center">
            {PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full h-full justify-center gap-2.5 whitespace-nowrap rounded-full border border-accent text-white hover:bg-accent hover:text-primary px-6 py-3.5 no-underline transition-all duration-200 hover:border-white/60"
                aria-label={p.ariaLabel}
              >
                <p.Logo />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
