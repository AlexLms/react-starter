# React boilerplate

## [Webpack 4, babel 7, styled-components, linter]

Fast builder for your SPA projects.

There are 2 versions of a project:

1) [styled components](https://www.styled-components.com/) `git clone https://github.com/AlexLasagna/react-starter.git`
2) [sass](https://sass-lang.com/) `git clone -b sass-branch https://github.com/AlexLasagna/react-starter.git`

If you familiar with styled it's better to use it instead of Sass.

## Navigation

- [Installation](#installation)
- [Boilerplate Concept](#concept)
- [File location](#file-location)
- [Build production](#build-production)
- [Aliases](#aliases)
- [Used plugins](#used-plugins)
- [The idea behind the example](#the-idea-behind-the-example)

## Installation

0) Clone the branch you need

1) `cd` to react-starter folder.

2) Install webpack dependencies via npm `npm i` or yarn `yarn install`.

3) Start your web server `yarn start` || `npm run start`.

## Concept

All your webpack modules are in [webpack](https://github.com/AlexLasagna/react-starter/tree/master/webpack) folder. You can easily call the module you need in `webpack.config.js` file.

```javascript
const rules = [babel(), images(), fonts(), anyOtherModule()];

const common = merge([
  {
    // ...
    module: {
      rules,
    },
  }
]);
```

There are 2 modes you can work with: `production` and `development` which are declared in `package.json` file.

According to version 4 of [styled-components](https://www.styled-components.com/), global styles are now declared through the createGlobalStyle and imported into the top component of the application. Check our `src/layout/` folder.

## File location

- [webpack modules](https://github.com/AlexLasagna/react-starter/tree/master/webpack) to work with styles, files, etc
- [components](https://github.com/AlexLasagna/react-starter/tree/master/src/components)
- [fonts, icons, etc](https://github.com/AlexLasagna/react-starter/tree/master/src/static)

## Build production

To build a production version of your app you need to type `npm run build` || `yarn build` in a console. This will create dist folder where everything will be compressed and minified.

## Aliases

If you need to configure your custom aliases you don't need .env file or something like eslint-import-resolver-babel-root-import. All you need is set aliases in `webpack.config.js` file.

```javascript

// webpack.config.js
const common = merge([
  {
    entry: {
      index: './src/index.js',
    },
    // ...
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
  }
]);

/*
  src
  |- pages
    |- MyComponent
      |- index.js
  |- actions
    | index.js
*/


import actionName from 'src/actions';

const MyComponent = () => ();
```

## Used plugins

- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
- [CleanWebpackPlugin](https://github.com/johnagan/clean-webpack-plugin)
- [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [HotModuleReplacementPlugin](https://webpack.js.org/plugins/hot-module-replacement-plugin/)
- [OccurrenceOrderPlugin](https://webpack.js.org/plugins/internal-plugins/#occurrenceorderplugin)
- [UglifyJsPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)
- [OptimizeCssAssetsPlugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)

## The idea behind the example

Show one of the possible webpack configurations

Also remind me stuff :D