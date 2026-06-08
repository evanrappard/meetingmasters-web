import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  title: "MeetingMasters CMS",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Inhoud")
          .items([
            S.documentTypeListItem("homepageContent").title("Homepage teksten"),
            S.documentTypeListItem("service").title("Services / Producten"),
            S.documentTypeListItem("caseStudy").title("Cases"),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.documentTypeListItem("logo").title("Klantlogo's"),
          ]),
    }),
    visionTool(),
  ],
});
