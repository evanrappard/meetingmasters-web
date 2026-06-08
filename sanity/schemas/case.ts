export const caseStudy = {
  name: "caseStudy",
  title: "Cases",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
      validation: (R: any) => R.required(),
    },
    {
      name: "slug",
      title: "URL-slug",
      type: "slug",
      options: { source: "title" },
      validation: (R: any) => R.required(),
    },
    {
      name: "client",
      title: "Klant",
      type: "string",
    },
    {
      name: "image",
      title: "Hoofdafbeelding",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "summary",
      title: "Korte omschrijving",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Inhoud",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "stats",
      title: "Statistieken",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Getal/waarde", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Datum",
      type: "datetime",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "client", media: "image" },
  },
};
