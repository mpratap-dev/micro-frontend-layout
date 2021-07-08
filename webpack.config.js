const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "oye",
    projectName: "nav",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    target: ["web"],
    externals: ["single-spa", "react", "react-dom", "@material-ui/core"],
    // modify the webpack config however you'd like to by adding to this object
  });
};
