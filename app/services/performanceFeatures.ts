export const performanceFeatureLinks = [
  {
    key: "performance",
    title: "Performance Marketing",
    href: "/services/performance-marketing/",
    desc: "Full-funnel toolkit — demand gen, lead gen & CRO built in",
    icon: "/icons/performance/performance.svg",
  },
  {
    key: "sem",
    title: "SEM",
    href: "/services/sem/",
    desc: "Google · Bing · Baidu · PMax · Shopping · Conquesting",
    icon: "/img/img-f128ba6125.svg",
  },
  {
    key: "video",
    title: "Video Performance",
    href: "/services/video-performance/",
    desc: "YouTube · Reels · Shorts · TikTok",
    icon: "/icons/performance/video.svg",
  },
  {
    key: "paid-social",
    title: "Paid Social",
    href: "/services/paid-social/",
    desc: "Meta · WhatsApp · TikTok · XHS",
    icon: "/img/img-418fc6052a.svg",
  },
  {
    key: "analytics",
    title: "Analytics & Attribution",
    href: "/services/analytics-attribution/",
    desc: "GA4 · CAPI · Server-side GTM · MMM · ROAS",
    icon: "/img/img-e40f4add84.svg",
  },
];

export function performanceViewMoreFeatures(currentKey: string) {
  return performanceFeatureLinks.filter((item) => item.key !== currentKey);
}
