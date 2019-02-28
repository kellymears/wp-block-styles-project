# WordPress Block Styles Project

Finding a usable starting place for the major frameworks.

**Currently targeting:**

- Bootstrap
- Bulma
- Tachyons (!)
- Framework-free

Pull requests welcome.

## Setup

Bulma is the framework I'm currently working on. You can easily work backwards from `_wp-blocks.scss` and figure out how you might use, contribute to, or discard this work.

### _config.scss

The sass maps are set up to let you define your own additional colors, font-sizes, etc.

Really helpful debugging tools are included. Both `outline` and `grid` debugging modes can be enabled from the config file.

### _vendor.scss

`@include` the framework you want to build for.

### _wp-blocks.scss

`@include` the set of selectors you'd like to work on.
