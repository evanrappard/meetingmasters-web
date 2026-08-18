import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import Analytics from "@/components/ui/Analytics";

/**
 * De Engelse sectie. De `lang` staat in de root-layout op "nl", want dat is de
 * hoofdtaal van de site. Hier zetten we hem op "en" voor alles wat eronder
 * valt: schermlezers kiezen dan de juiste uitspraak en zoekmachines zien welke
 * taal deze pagina's hebben.
 *
 * De Navbar leest de taal zelf uit het adres — die is toch al een
 * clientcomponent vanwege het uitklapmenu. De Footer krijgt hem hier mee, zodat
 * die servercomponent kan blijven.
 */
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en">
      <Navbar />
      <main>{children}</main>
      <Footer taal="en" />
      <CookieBanner />
      <Analytics />
    </div>
  );
}
