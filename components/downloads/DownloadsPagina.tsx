import Image from "next/image";
import Link from "next/link";
import HubSpotForm from "@/components/ui/HubSpotForm";
import { HUBSPOT_PORTAL_ID, HUBSPOT_FORMS } from "@/lib/hubspot-forms";
import { type Item, NL } from "@/app/nl/downloads/data";
import { DOWNLOADS_EN } from "@/app/nl/downloads/tekst-en";
import type { Taal } from "@/lib/talen";
import HeroBeeld from "@/components/ui/HeroBeeld";

/**
 * De Downloads-pagina, in beide talen.
 *
 * Het Vergadermacht-blok staat alleen op de Nederlandse pagina: die publicatie
 * bestaat niet in het Engels, en het formulier erachter evenmin.
 */

function Kaart({ item }: { item: Item }) {
  const inhoud = (
    <>
      {item.beeld && (
        // Het voorblad hangt half over de rand: dat leest als een document dat
        // op tafel ligt, in plaats van als nóg een plaatje in een kader.
        <span className="block relative aspect-[3/4] -mx-6 -mt-6 mb-5 overflow-hidden bg-[#EDEDEA] border-b border-[#EBEBEB]">
          <Image
            src={item.beeld}
            alt={`Voorblad van ${item.titel}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </span>
      )}
      <p className="text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide mb-2">
        {item.soort} · {item.datum}
      </p>
      <h3 className="font-bold text-[#2D2D2D] text-lg mb-2 leading-snug group-hover:text-[#EEBE3D] transition-colors">
        {item.titel}
      </h3>
      <p className="text-sm text-[#434343] leading-relaxed mb-5 flex-1">{item.body}</p>
      <span className="text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide">
        {item.actie} {item.extern ? "↗" : "→"}
      </span>
    </>
  );
  const stijl =
    "group flex flex-col rounded border border-[#EBEBEB] bg-white p-6 overflow-hidden hover:bg-[#FFFBEE] hover:border-[#EEBE3D]/50 hover:shadow-md transition-all";

  return item.extern ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={stijl}>
      {inhoud}
    </a>
  ) : (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={stijl}>
      {inhoud}
    </a>
  );
}



export default function DownloadsPagina({ taal = "nl" }: { taal?: Taal }) {
  const engels = taal === "en";
  const t = engels ? DOWNLOADS_EN : NL;
  const publicaties = (engels ? DOWNLOADS_EN.publicaties : NL.publicaties) as Item[];
  const handleidingen = (engels ? DOWNLOADS_EN.handleidingen.items : NL.handleidingen.items) as Item[];
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#2D2D2D] overflow-hidden">
        <div className="absolute inset-0">
          <HeroBeeld
            src="/images/downloads-hero.webp"
            alt="Iemand aan een bureau met een laptop waarop een downloadknop staat"
            fill priority quality={90}
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/70 lg:via-[#2D2D2D]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/80 to-transparent lg:hidden" />
        </div>

        <div className="relative max-w-content mx-auto px-8 md:px-16 lg:px-20 py-16 md:py-24 lg:py-28">
          <div className="max-w-[560px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">{t.hero.kicker}</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)" }}
            >
              {t.hero.titel}
             </h1>
            <p className="text-white/80 text-base leading-relaxed">
              {t.hero.intro}
             </p>
          </div>
        </div>
      </section>

      {/* Vergadermacht bestaat niet in het Engels, dus dit blok staat alleen
          op de Nederlandse pagina. */}
      {/* ── VERGADERMACHT ──
          Het formulier van de HubSpot-landingspagina staat hier ingesloten, in
          plaats van dat we mensen naar hs-sites sturen. Zelfde formulier en
          dezelfde leads, maar in de stijl van de site en zonder de sprong naar
          een ander domein. */}
      {!engels && (
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
            <div className="max-w-[620px]">
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-7 shadow-md">
                <Image
                  src="/images/vergadermacht-boek.webp"
                  alt="De publicatie Vergadermacht, over hoe centrale regie op overleg de waarde van bijeenkomsten vergroot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 620px"
                />
              </div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                Onze publicatie
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Vergadermacht
              </h2>
              <p className="text-[#2D2D2D] font-semibold leading-snug mb-4">
                Hoe centrale regie op overleg de waarde van bijeenkomsten vergroot.
              </p>
              <p className="text-[#434343] leading-relaxed mb-4">
                Over hoe bijeenkomsten werkelijk werken: wie er spreekt, wie er zwijgt, en wat dat
                doet met wat er wordt besloten. Als vergaderingen de plaats zijn waar
                strategie en beleid tot leven komen, hoe beleg je die verantwoordelijkheid?
              </p>
              <p className="text-[#434343] leading-relaxed">
                Vul je gegevens in en je ontvangt de publicatie meteen.
              </p>
            </div>

            <div className="w-full rounded-lg border border-[#EBEBEB] bg-[#F7F7F5] p-6 sm:p-7">
              <p className="font-bold text-[#2D2D2D] mb-4">Ontvang Vergadermacht</p>
              <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORMS.vergadermacht} />
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ── KEUZEKOMPAS ──
          Uit 2022, en dat zie je aan de vormgeving. De inhoud klopt nog, dus
          het jaartal staat er gewoon bij in plaats van dat we het verstoppen. */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                {t.kompas.label}
               </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.kompas.titel}
               </h2>
              <p className="text-[#434343] leading-relaxed mb-4">
                {t.kompas.body}
               </p>
              <p className="text-sm text-[#8A9493] mb-6">{t.kompas.jaar}</p>
              <a
                href={t.kompas.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
              >
                {t.kompas.cta}
               </a>
            </div>

            <div>
              {/* Kort filmpje, met bediening: er zit gesproken tekst op, dus
                  niets start vanzelf. */}
              <video
                className="w-full rounded-lg border border-[#EBEBEB] bg-black"
                controls
                preload="metadata"
                poster={t.kompas.beeld}
              >
                <source src={t.kompas.video} type="video/mp4" />
                {t.kompas.geenVideo}{" "}
                <a href={t.kompas.youtube}>{t.kompas.youtubeLabel}</a>.
              </video>
              <p className="text-sm text-[#5F5F5F] mt-3">
                {t.kompas.onderschrift}{" "}
                <a
                  href={t.kompas.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#28A8AA] font-semibold hover:underline"
                >
                  {t.kompas.onderschriftLink}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PUBLICATIES ──────────────────────────────────────────────── */}
      <section className="bg-white border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px] mb-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.direct.kicker}
             </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.direct.titel}
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[760px]">
            {publicaties.map((item) => (
              <Kaart key={item.href} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HANDLEIDINGEN ────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px] mb-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.handleidingen.kop}
             </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.handleidingen.onder}
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {handleidingen.map((item) => (
              <Kaart key={item.href} item={item} />
            ))}
          </div>

          <p className="text-[#434343] leading-relaxed mt-8 max-w-[680px]">
            {t.handleidingen.hulpVoor}{" "}
            <Link href={t.links.hulp} className="text-[#28A8AA] font-semibold hover:underline">
              {t.handleidingen.techHulp}
             </Link>{" "}
            {t.handleidingen.hulpNa}
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[640px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
              {t.cta.kop}
             </h2>
            <p className="text-[#434343] leading-relaxed mb-6">
              {t.cta.onder}
             </p>
            <Link
              href={t.links.advies}
              className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
            >
              {t.cta.advies}
             </Link>
          </div>
        </div>
      </section>
    </>
  );
}
