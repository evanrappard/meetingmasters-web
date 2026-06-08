"use client";

import Link from "next/link";

interface CTACardProps {
  level: string;
  title: string;
  desc: string;
  ctaLabel: string;
  href: string;
  variant: "low" | "mid" | "high";
}

function CTACard({ level, title, desc, ctaLabel, href, variant }: CTACardProps) {
  const cardStyle = `bg-white rounded p-6 flex flex-col shadow-md`;

  const levelColor =
    variant === "high" ? "text-[#B8962A]" :
    variant === "mid"  ? "text-[#28A8AA]" :
                         "text-[#898989]";
  const btnStyle = "bg-[#EEBE3D] text-[#2D2D2D] hover:bg-[#D4A835]";

  return (
    <div className={cardStyle}>
      <p className={`${levelColor} text-xs font-bold tracking-widest uppercase mb-3`}>
        {level}
      </p>
      <h3 className="text-[#2D2D2D] text-lg font-bold mb-3 leading-snug">{title}</h3>
      <p className="text-[#545454] text-sm leading-relaxed flex-1 mb-6">{desc}</p>
      <Link
        href={href}
        className={`${btnStyle} text-sm font-bold px-5 py-2.5 rounded text-center transition-colors inline-block`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}

export default function CTABlock() {
  return (
    <>
      <section className="bg-[#E3ECEC] py-14 px-6 lg:px-10 border-t border-[#D2DEDE]">
        <div className="max-w-content mx-auto">
          <div className="mb-8">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Volgende stap</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-8">
              Online, maar dan anders.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <CTACard
              level="Oriëntatie"
              title="Bekijk de inspiratie"
              desc="Voorbeelden van bijeenkomsten, event formats en opzetten — om van te leren en inspiratie op te doen voor uw eigen event."
              ctaLabel="Bekijk voorbeelden →"
              href="/nl/inspiratie"
              variant="low"
            />
            <CTACard
              level="Interesse"
              title="Ervaar het verschil"
              desc="20 minuten om te zien hoe een platform als SpatialChat iets anders doet dan Zoom of Teams."
              ctaLabel="Plan een rondleiding →"
              href="/nl/contact"
              variant="mid"
            />
            <CTACard
              level="Concreet traject"
              title="Plan een gesprek — wij denken mee"
              desc="Vrijblijvend. Wij denken direct mee over uw situatie, uw groep en wat er nodig is."
              ctaLabel="Plan een gesprek →"
              href="/nl/contact"
              variant="high"
            />
          </div>

        </div>
      </section>

    </>
  );
}
