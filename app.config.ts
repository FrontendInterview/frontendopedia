// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: "Frontendopedia",
    description: "Front-end development knowledge at your fingertips.",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    // socials: {
    //   twitter: "nuxt_js",
    //   github: "nuxt-themes/docus",
    //   nuxt: {
    //     label: "Nuxt",
    //     icon: "simple-icons:nuxtdotjs",
    //     href: "https://nuxt.com",
    //   },
    // },
    // github: {
    //   dir: ".starters/default/content",
    //   branch: "main",
    //   repo: "docus",
    //   owner: "nuxt-themes",
    //   edit: true,
    // },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
});
