import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"


const config: QuartzConfig = {
  configuration: {
    pageTitle: "Wiktor's Digital Garden ",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://witek0015.github.io/digital-garden",
    ignorePatterns: ["private", "templates", ".obsidian", "templates", "uni", "zmetafiles", "journal"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fira Mono",
        body: "Roboto Mono",
        code: "IBM Plex Mono",
      },
colors: {
  lightMode: {
    light:        "#fbf1c7", // page background (soft cream)
    lightgray:    "#ebdbb2", // borders (sand)
    gray:         "#d5c4a1", // graph links / strong borders
    darkgray:     "#3c3836", // body text (deep gray-brown)
    dark:         "#1d2021", // headers/icons (almost black brown)
    secondary:    "#458588", // links / current graph node (blue-green cyan)
    tertiary:     "#b8bb26", // hover states / visited graph nodes (acid green)
    highlight:    "rgba(250, 189, 47, 0.15)", // internal link bg / highlight (soft yellow)
    textHighlight:"#fabd2f88", // markdown highlight (amber translucent)
  },
  darkMode: {
    light:        "#282828", // background (deep gruv gray)
    lightgray:    "#3c3836", // borders (warm brown-gray)
    gray:         "#504945", // graph links / strong borders
    darkgray:     "#ebdbb2", // body text (sand)
    dark:         "#fbf1c7", // headers/icons (light cream)
    secondary:    "#83a598", // links / current node (desaturated cyan)
    tertiary:     "#d3869b", // hover / visited (mauve pink)
    highlight:    "rgba(250, 189, 47, 0.15)", // highlight background
    textHighlight:"#fabd2f88", // markdown highlight (amber)
  }
}
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
     // Plugin.CustomOgImages(),
    ],
  },
}

export default config
