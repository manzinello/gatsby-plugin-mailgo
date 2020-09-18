# 💌 Mailgo Gatsby plugin

a new concept of `mailto` and `tel` links

<https://mailgo.dev>

## Install

```
npm install --save gatsby-plugin-mailgo
```

or

```
yarn add gatsby-plugin-mailgo
```

then add `gatsby-plugin-mailgo` in your `gatsby-config.js` file.

```js
module.exports = {
  plugins: [`...`, `gatsby-plugin-mailgo`, `...`],
};
```

You can pass the mailgo [configuration](https://mailgo.dev/docs/configuration) with `mailgoConfig` option, here an example

```js
module.exports = {
  plugins: [
    `...`,
    {
      resolve: `gatsby-plugin-mailgo`,
      options: {
        mailgoConfig: {
          dark: true,
        },
      },
    },
    ,
    `...`,
  ],
};
```

you can create your mailgoConfig using all the attributes specified in the [docs](https://mailgo.dev/docs/configuration).

Be careful `initEvent` parameter, be sure that `window` has been initialized! We recommend not to specify it in `mailgoConfig` to avoid any type of error and be sure that **mailgo** will be started correctly.

**Nothing more to have mailgo in your Gatsby!**

## Usage

Just adding the plugin, by default all `mailto` and `tel` links in your Gatsby website are enabled with mailgo!

See all the details of usage on https://mailgo.dev/docs/usage.

## Example

Here a repository of a Gatsby (created from `gatsby-starter-default`) website with mailgo <https://github.com/manzinello/gatsby-mailgo-example> and here you can see the website deployed <https://gatsby-mailgo-example.netlify.app>.

This example uses `gatsby-plugin-mailgo` with a configuration object to enable the dark mode.

## Demo

https://mailgo.dev

![mailgo screencast](https://github.com/manzinello/mailgo/raw/master/assets/video/mailgo.gif)

### CodePen

https://codepen.io/manzinello/pen/RmeQEr

## On GatsbyJS

https://www.gatsbyjs.org/packages/gatsby-plugin-mailgo/
