# React boilerplate [styled-components, linter]

Fast builder for your SPA projects.

There are 2 versions of a project:

1) [styled components](https://www.styled-components.com/) `git clone https://github.com/AlexLasagna/react-starter.git`
2) [sass](https://sass-lang.com/) `git clone -b sass-branch https://github.com/AlexLasagna/react-starter.git`

If you familiar with styled it's better to use it instead of Sass.

# Installation

1) Open your console and type:

2) Install webpack dependencies via npm `npm i` or yarn `yarn install`.

3) Start your web server `yarn dev` || `npm run dev`.

# Location of stuff

- your [Webpack congif](https://github.com/AlexLasagna/react-starter/tree/sass-branch/webpack) files
- your [fonts.js and reset.js](https://github.com/AlexLasagna/react-starter/tree/master/src/styles/base) files
- your [components](https://github.com/AlexLasagna/react-starter/tree/master/src/pages)
- all imgs fonts [etc](https://github.com/AlexLasagna/react-starter/tree/master/src/files)

# Build production

To build a production version of your app you need to type `npm run prod` || `yarn prod` in a console. This will create dist folder where everything will be compressed and minified.