# React boilerplate

Fast builder for your SPA projects.

<p>
	<img src="https://readmeimgs-dbetwjhldo.now.sh/react.png" alt="React starter pack">
</p>

Easily configure and add webpack modules and style your app without any stress with [styled-components](https://www.styled-components.com/)

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

All your webpack modules are in [webpack](https://github.com/AlexLms/react-starter/tree/master/webpack) folder. You can easily call the module you need in `webpack.config.js` file.

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

    .
    ├── src/                    # App folder with all developer stuff
    │   ├── components/         # All components used in the project
    │   ├── layout/             # Laout the entire app is stored in one place
    │   ├── pages/              # Pages that use components/
    │   ├── static/             # Used to store fonts, icons, images
    │   └── ...
    ├── webpack/                # Modules you can easily add to config
    ├── webpack.config.js       # All webpack settings
    └── ...


## Build production

To build a production version of your app you need to type

`npm run build` || `yarn build`

This will create dist folder where everything will be compressed and minified.

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