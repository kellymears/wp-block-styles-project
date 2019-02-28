# WordPress Block Styles Project

![Editor output with debugging](https://raw.githubusercontent.com/kellymears/wp-block-styles-project/master/screenshot.png "Editor Output with Debugging")


Working together to find a usable starting point for the major frameworks.

**Currently targeting:**

- Bootstrap
- Bulma
- Tachyons (!)
- Vanilla (framework-free)

Pull requests welcome.

## Setup

To date, I've made progress with Bulma and the non-framework dependent blocksets. You can easily work backwards from `_wp-blocks.scss` and figure out how you might use, contribute to, or discard this work if you follow those selectors.

### _config.scss

The sass maps are set up to let you define your own additional colors, font-sizes, etc.

Really helpful debugging tools are included. Both `outline` and `grid` debugging modes can be enabled from the config file.

### _vendor.scss

`@include` the framework you want to build for.

### _wp-blocks.scss

`@include` the set of selectors you'd like to work on.
