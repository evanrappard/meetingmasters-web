export const logo = {
  name: "logo",
  title: "Klantlogo's",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Naam",
      type: "string",
      validation: (R: any) => R.required(),
    },
    {
      name: "logo",
      title: "Logo (wit/transparant PNG)",
      type: "image",
      options: { hotspot: false },
      validation: (R: any) => R.required(),
    },
    {
      name: "order",
      title: "Volgorde",
      type: "number",
      description: "Lager = verder naar voren in de rij",
    },
  ],
  orderings: [{ title: "Volgorde", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", media: "logo" },
  },
};
