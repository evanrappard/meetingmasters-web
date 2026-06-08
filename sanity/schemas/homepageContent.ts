export const homepageContent = {
  name: "homepageContent",
  title: "Homepage teksten",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "heroHeadline",
      title: "Hero — grote koptekst",
      type: "string",
      description: "De grote tekst bovenaan de pagina",
    },
    {
      name: "heroSubline",
      title: "Hero — subtekst",
      type: "text",
      rows: 2,
    },
    {
      name: "heroCta",
      title: "Hero — knoptekst",
      type: "string",
    },
    {
      name: "statementText",
      title: "Gele banner — tekst",
      type: "text",
      rows: 2,
      description: "De quote in de gele balk onder de hero",
    },
    {
      name: "stats",
      title: "Statistieken",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Getal", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: { title: "heroHeadline" },
    prepare: ({ title }: { title?: string }) => ({ title: title ?? "Homepage" }),
  },
};
