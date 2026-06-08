export const testimonial = {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (R: any) => R.required(),
    },
    {
      name: "author",
      title: "Naam",
      type: "string",
      validation: (R: any) => R.required(),
    },
    {
      name: "role",
      title: "Functie / organisatie",
      type: "string",
    },
    {
      name: "avatar",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "featured",
      title: "Uitgelicht op homepage",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: { title: "author", subtitle: "role", media: "avatar" },
  },
};
