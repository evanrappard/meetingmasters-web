import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import Analytics from "@/components/ui/Analytics";

export default function NlLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* Bewust hier en niet in de root: de /embed-pagina's draaien in een
          iframe bij klanten en horen geen banner te tonen. */}
      <CookieBanner />
      <Analytics />
    </>
  );
}
