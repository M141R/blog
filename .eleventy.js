module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/fonts");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
