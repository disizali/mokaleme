const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const withImage = require("next-images");
module.exports = withSass(withFonts(withImage({})));
