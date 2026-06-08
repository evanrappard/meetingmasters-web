export const service = {
  name: "service",
  title: "Services / Producten",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naam",
      type: "string",
      validation: (R: any) => R.required(),
    },
    {
      name: "slug",
      title: "URL-slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "label",
      title: "Kort label (bijv. 'Events')",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline / subtitle",
      type: "string",
    },
    {
      name: "description",
      title: "Beschrijving",
      type: "text",
      rows: 4,
    },
    {
      name: "image",
      title: "Afbeelding",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "href",
      title: "Link-pad (bijv. /events)",
      type: "string",
    },
    {
      name: "order",
      title: "Volgorde",
      type: "number",
    },
  ],
  orderings: [{ title: "Volgorde", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "tagline", media: "image" },
  },
};
