export default {
  eleventyComputed: {
    permalink: (data) => {
      if (!data.page.fileSlug) return "/";
      return `/${data.page.fileSlug}/`;
    },
  },
};
