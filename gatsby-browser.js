/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import mailgo from "mailgo";

let onInitialClientRender = (_, pluginOptions) => {
  // mailgo config
  let { mailgoConfig } = pluginOptions;

  // execute mailgo
  mailgo(mailgoConfig);
};

export { onInitialClientRender };
