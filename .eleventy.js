export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  eleventyConfig.addGlobalData("site", {
    name: "LC Education Consulting",
    url: "https://lceducationconsulting.com",
    description: "Accessibility reviews, training, and digital accessibility support rooted in 16 years of special education experience.",
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
