"use client";

import { useMemo, useState } from "react";

export type FaqItem = {
  id: string;
  category: string; // category id
  tool: string; // "Algemeen" | "SpatialChat" | "Zoom Events" | "Zoom" | "Teams"
  q: string;
  a: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  icon: string;
  intro?: string;
};

const TOOL_COLORS: Record<string, string> = {
  Algemeen: "bg-[#EFEFEF] text-[#666666]",
  SpatialChat: "bg-[#FFF4D6] text-[#8A6D1A]",
  "Zoom Events": "bg-[#E3F0FB] text-[#2C6FA6]",
  Zoom: "bg-[#E3F0FB] text-[#2C6FA6]",
  "Microsoft Teams": "bg-[#EBE9FB] text-[#5B5AA6]",
  Teams: "bg-[#EBE9FB] text-[#5B5AA6]",
};

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function TechFaq({
  categories,
  tools,
  items,
  supportPhone,
}: {
  categories: FaqCategory[];
  tools: string[];
  items: FaqItem[];
  supportPhone: string;
}) {
  const [query, setQuery] = useState("");
  const [activeTool, setActiveTool] = useState<string>(tools[0] ?? "Algemeen");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return items.filter((it) => {
      // Zoeken doorzoekt álle tools; bladeren respecteert de gekozen tool-chip.
      if (q) return normalize(it.q).includes(q) || normalize(it.a).includes(q);
      return it.tool === activeTool || it.tool === "Algemeen";
    });
  }, [items, query, activeTool]);

  const byCategory = useMemo(() => {
    const map: Record<string, FaqItem[]> = {};
    for (const c of categories) map[c.id] = [];
    for (const it of filtered) (map[it.category] ??= []).push(it);
    return map;
  }, [filtered, categories]);

  const totalMatches = filtered.length;

  return (
    <div>
      {/* Zoekbalk + toolfilter */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-[#EBEBEB] py-4 -mx-8 md:-mx-16 lg:-mx-20 px-8 md:px-16 lg:px-20">
        <div className="relative mb-3">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AAAAAA]" aria-hidden>🔍</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zoek je vraag… (bijv. 'ik hoor niets' of 'link')"
            aria-label="Zoek in de veelgestelde vragen"
            className="w-full rounded-lg border border-[#DADADA] bg-white pl-11 pr-4 py-3.5 text-base text-[#2D2D2D] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#EEBE3D] focus:ring-2 focus:ring-[#EEBE3D]/25"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold text-[#AAAAAA] uppercase tracking-wide mr-1">Welke tool?</span>
          {tools.map((t) => (
            <button
              key={t}
              onClick={() => { setQuery(""); setActiveTool(t); }}
              className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
                !query && activeTool === t
                  ? "bg-[#2D2D2D] text-white border-[#2D2D2D]"
                  : "bg-white text-[#666666] border-[#DADADA] hover:border-[#2D2D2D]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        {query && (
          <p className="text-xs text-[#888888] mt-3">
            {totalMatches} {totalMatches === 1 ? "resultaat" : "resultaten"} voor “{query}”
          </p>
        )}
      </div>

      {/* Categorie-ankers */}
      {!query && (
        <nav className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8 mb-4">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group flex items-center gap-3 rounded-lg border border-[#E8E8E8] bg-white px-4 py-4 hover:border-[#EEBE3D] hover:bg-[#FFFDF5] transition-colors"
            >
              <span className="text-2xl" aria-hidden>{c.icon}</span>
              <span className="text-sm font-bold text-[#2D2D2D] leading-tight group-hover:text-[#D4A835]">{c.label}</span>
            </a>
          ))}
        </nav>
      )}

      {/* Categorieën met items */}
      <div className="mt-8 space-y-12">
        {categories.map((c) => {
          const list = byCategory[c.id] ?? [];
          if (list.length === 0) return null;
          return (
            <section key={c.id} id={c.id} className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl" aria-hidden>{c.icon}</span>
                <h2 className="text-xl font-bold text-[#2D2D2D]">{c.label}</h2>
              </div>
              {c.intro && <p className="text-sm text-[#777777] leading-relaxed mb-5 max-w-[640px]">{c.intro}</p>}
              <div className="border-t border-[#F0F0F0]">
                {list.map((it) => (
                  <details key={it.id} className="group border-b border-[#F0F0F0] py-4">
                    <summary className="flex justify-between items-start gap-4 list-none cursor-pointer">
                      <span className="flex items-start gap-3">
                        <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded ${TOOL_COLORS[it.tool] ?? "bg-[#EFEFEF] text-[#666666]"}`}>
                          {it.tool}
                        </span>
                        <span className="font-semibold text-[#2D2D2D] text-[15px] leading-snug">{it.q}</span>
                      </span>
                      <span className="text-[#EEBE3D] font-bold text-lg leading-none group-open:rotate-45 transition-transform shrink-0">+</span>
                    </summary>
                    <div className="text-sm text-[#555555] leading-relaxed mt-3 pl-0 sm:pl-[68px] whitespace-pre-line">{it.a}</div>
                  </details>
                ))}
              </div>
            </section>
          );
        })}

        {totalMatches === 0 && (
          <div className="rounded-lg border border-[#E8E8E8] bg-[#F9F9F7] p-8 text-center">
            <p className="text-[#2D2D2D] font-bold mb-2">Niets gevonden voor “{query}”.</p>
            <p className="text-sm text-[#777777] mb-4">
              Geen zorgen — bij een begeleide bijeenkomst van MeetingMasters helpen we je direct.
            </p>
            <a href={`tel:${supportPhone.replace(/\s/g, "")}`} className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-6 py-3 rounded hover:bg-[#D4A835] transition-colors">
              Bel support: {supportPhone}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
