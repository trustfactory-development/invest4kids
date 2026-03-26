export const localVideos = {
  "testimonial-laura": {
    filePath: "public/media/videos/testimonial-laura.mp4",
    contentType: "video/mp4",
    title: "Laura testimonial",
  },
  "testimonial-oliver": {
    filePath: "public/media/videos/testimonial-oliver.mp4",
    contentType: "video/mp4",
    title: "Oliver testimonial",
  },
  "testimonial-yvonne": {
    filePath: "public/media/videos/testimonial-yvonne.mp4",
    contentType: "video/mp4",
    title: "Yvonne testimonial",
  },
  "story-yvonne": {
    filePath: "public/media-source/videos/Yvonne-351x274-1.mov",
    contentType: "video/quicktime",
    title: "Yvonne story",
  },
  "story-oliver": {
    filePath: "public/media-source/videos/Oliver-Frohnert-351x274-1.mov",
    contentType: "video/quicktime",
    title: "Oliver story",
  },
  "story-laura": {
    filePath: "public/media-source/videos/Laura-Steinhaeuser-351x274-1.mov",
    contentType: "video/quicktime",
    title: "Laura story",
  },
  "story-sarah": {
    filePath: "public/media-source/videos/Sarah-Siegmund-351x274-1.mov",
    contentType: "video/quicktime",
    title: "Sarah story",
  },
  "story-margot": {
    filePath: "public/media-source/videos/Margot-351x274-1.mov",
    contentType: "video/quicktime",
    title: "Margot story",
  },
} as const;

export type LocalVideoId = keyof typeof localVideos;

export function getLocalVideo(id: string) {
  return localVideos[id as LocalVideoId] ?? null;
}

export function getLocalVideoUrl(id: LocalVideoId) {
  return `/media/video/${id}`;
}
