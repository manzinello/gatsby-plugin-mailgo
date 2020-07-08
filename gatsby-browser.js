/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const mailgo = require("mailgo");

exports.onInitialClientRender = () => {
  // execute mailgo
  mailgo();
};
