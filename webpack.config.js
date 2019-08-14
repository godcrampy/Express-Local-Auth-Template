const path = require("path");

module.exports = {
  entry: {
    main: "./scripts/app.js",
    signup: "./scripts/signup.validator.js"
  },
  output: {
    filename: "bundle-[name].js",
    path: path.resolve(__dirname, "public/js/")
  },
  mode: "development"
};