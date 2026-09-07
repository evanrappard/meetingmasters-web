import { permanentRedirect } from "next/navigation";
// Inspiratie content lives at /en/cases for now — will be rebuilt as its own page
export default function InspiratiePage() { permanentRedirect("/en/testimonials"); }
