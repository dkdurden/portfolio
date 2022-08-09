export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "projectSlug",
      type: "slug",
      title: "Project Slug",
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "enableDetails",
      type: "boolean",
      title: "Enable Details",
    },
    {
      name: "showcaseProject",
      type: "boolean",
      title: "Showcase Project",
    },
    {
      name: "summary",
      type: "text",
      title: "Summary",
    },
    {
      name: "details",
      type: "text",
      title: "Details",
    },
    {
      name: "heroImg",
      type: "image",
      title: "Hero Image",
    },
    {
      name: "summaryImg",
      type: "image",
      title: "Summary Image",
    },
    {
      name: "previewImage1",
      type: "image",
      title: "Preview Image 1",
      fields: [
        {
          title: "Alt Text",
          name: "alt",
          type: "string",
        },
      ],
    },
    {
      name: "previewImage2",
      type: "image",
      title: "Preview Image 2",
      fields: [
        {
          title: "Alt Text",
          name: "alt",
          type: "string",
        },
      ],
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    },
    {
      name: "nextProject",
      type: "object",
      title: "Next Project",
      fields: [
        {
          title: "Project Name",
          name: "projectName",
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    },
    {
      name: "prevProject",
      type: "object",
      title: "Previous Project",
      fields: [
        {
          title: "Project Name",
          name: "projectName",
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    },
    {
      name: "liveUrl",
      type: "url",
      title: "Live Url",
    },
  ],
};
