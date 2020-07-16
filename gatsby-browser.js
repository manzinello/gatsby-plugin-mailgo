/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const mailgo = require("mailgo");

exports.onInitialClientRender = (_, pluginOptions) => {
  // mailgo config
  let { mailgoConfig } = pluginOptions;

  // execute mailgo
  mailgo(mailgoConfig);
};
