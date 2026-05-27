import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.meetingmasters.online"),
  title: "MeetingMasters | Online events & remote work specialisten",
  description:
    "MeetingMasters ontwerpt online bijeenkomsten voor 50 tot 500 mensen — events, virtual offices en interactieve formats. 250+ events begeleid, 94% tevredenheid.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={`${rajdhani.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
