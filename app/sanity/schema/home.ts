import { Home } from "lucide-react";
import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: Home,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "siteTitle",
      type: "string",
    }),
    defineField({
      name: "test",
      type: "string",
    }),
    defineField({
      name: "feature",
      title: "This came from our new feature branch",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
      artist: "siteTitle",
    },
  },
});
