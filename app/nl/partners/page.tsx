import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners | MeetingMasters",
  description:
    "Our network of professional specialists — technology, facilitation, PR, and more.",
};

const partners = [
  { name: "Genuine Contact", category: "Education" },
  { name: "New Leaders! Academy", category: "Education" },
  { name: "Buro Bordo", category: "PR" },
  { name: "SpatialChat", category: "Technology" },
  { name: "Vote Company", category: "Online voting" },
  { name: "Distance Disco", category: "Interaction" },
  { name: "Annet Goltstein", category: "Facilitation" },
  { name: "Misc.", category: "Technical" },
];

export default function PartnersPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Partners</h1>
        <p className="text-[#666666] text-lg">
          We are surrounded by an extensive network of professional specialists.
        </p>
      </div>

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="border border-gray-200 rounded-lg p-6 text-center hover:border-accent transition-colors"
            >
              <p className="font-bold text-[#333333] text-base mb-1">{p.name}</p>
              <p className="italic text-[#888888] text-sm">{p.category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12 text-center">
        <p className="text-[#666666] mb-2 text-lg">Some of our clients:</p>
        <p className="text-sm text-[#888888] mb-6">
          Check out our testimonials section to see what they say…
        </p>
        <Link
          href="/nl/testimonials"
          className="text-accent hover:text-accent-dark text-sm font-medium transition-colors"
        >
          Read testimonials →
        </Link>
      </section>
    </div>
  );
}
