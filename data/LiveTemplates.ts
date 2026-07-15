export interface LiveTemplateItem {
  id: number;
  clientName: string;
  templateUsed: string;
  siteScreenshot: string;
  siteVideo?: string; // ◄ Properti opsional untuk file video (.mp4 / .webm)
  clientAvatar: string;
  templateThumbnail: string;
}

export const LiveTemplates: LiveTemplateItem[] = [
  {
    id: 1,
    clientName: "Paul Lucyk",
    templateUsed: "MERAAS",
    siteScreenshot: "", 
    siteVideo: "/video/video1.mp4", // ◄ Masukkan video Anda di folder public/videos/
    clientAvatar: "/image/avatar1.avif",     
    templateThumbnail: "/image/thumb1.avif"  
  },
  {
    id: 2,
    clientName: "Spencer Le Von",
    templateUsed: "MONETIZE",
    siteScreenshot: "",
    siteVideo: "/video/video2.mp4",
    clientAvatar: "/image/avatar2.avif",
    templateThumbnail: "/image/thumb2.avif"
  },
  {
    id: 3,
    clientName: "Julius Zeise",
    templateUsed: "EDITR",
    siteScreenshot: "",
    siteVideo: "video/video3.mp4",
    clientAvatar: "/image/avatar3.avif",
    templateThumbnail: "/image/thumb3.avif"
  },
  {
    id: 4,
    clientName: "Julius Zeise",
    templateUsed: "EDITR",
    siteScreenshot: "",
    siteVideo: "video/video4.mp4",
    clientAvatar: "/image/avatar4.avif",
    templateThumbnail: "/image/thumb4.avif"
  },
  {
    id: 5,
    clientName: "Julius Zeise",
    templateUsed: "EDITR",
    siteScreenshot: "",
    siteVideo: "video/video5.mp4",
    clientAvatar: "/image/avatar5.avif",
    templateThumbnail: "/image/thumb5.avif"
  },
  {
    id: 6,
    clientName: "Julius Zeise",
    templateUsed: "EDITR",
    siteScreenshot: "",
    siteVideo: "video/video6.mp4",
    clientAvatar: "/image/avatar6.avif",
    templateThumbnail: "/image/thumb6.avif"
  }
];