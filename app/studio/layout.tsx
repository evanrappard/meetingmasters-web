import { type Metadata, type Viewport } from "next";

export const metadata: Metadata = { title: "MeetingMasters Studio" };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
