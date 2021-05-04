export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60919e02ac8e070e0dcfc484",
                  title: "Sanity Studio",
                  name: "notes-dot-kitchen-studio",
                  apiId: "1d94ff4d-636a-485e-8fbc-cf880bf67e0b",
                },
                {
                  buildHookId: "60919e02c149c80fc609d730",
                  title: "Blog Website",
                  name: "notes-dot-kitchen-web",
                  apiId: "5392f353-5dd4-4aa8-8eb3-28fc5f421a7e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/infuerno/notes-dot-kitchen",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://notes-dot-kitchen-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
