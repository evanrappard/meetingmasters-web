import { MetadataRoute } from "next";

const BASE = "https://www.meetingmasters.online";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/nl/home`,                        changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/nl/events`,                      changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/nl/remote-office`,               changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/nl/games-tools`,                 changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/nl/games-tools/escape-masters`,  changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/nl/games-tools/ravenhack`,       changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/nl/inspiratie`,                  changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/nl/cases`,                       changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/nl/blog`,                        changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/nl/contact`,                     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/nl/about`,                       changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/nl/about/team`,                  changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/nl/about/partners`,              changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/nl/about/quality`,               changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/nl/escape-rooms`,                changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/nl/meeting-formats`,             changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/nl/testimonials`,                changeFrequency: "monthly", priority: 0.5 },
  ];
}
