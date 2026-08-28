import { TEKST } from "@/config/ravenhack";
import type { Taal } from "@/lib/talen";

/** Het voorbehoud onder elke module: dit is een weergave, geen bevestiging. */
export default function Disclaimer({ taal }: { taal: Taal }) {
  return (
    <p className="text-[13px] text-[#7A8483] leading-relaxed mt-5">{TEKST[taal].disclaimer}</p>
  );
}
