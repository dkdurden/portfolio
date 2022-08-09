export default {
  name: "profile",
  type: "document",
  title: "Profile",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "headline",
      type: "string",
      title: "Headline",
    },
    {
      name: "aboutMe",
      type: "text",
      title: "About Me",
    },
    {
      name: "getINTouch",
      type: "text",
      title: "Get In Touch",
    },
    {
      name: "profileImg",
      type: "image",
      title: "Profile Image",
      fields: [
        {
          title: "Alt Text",
          name: "alt",
          type: "string",
        },
      ],
    },
  ],
};
