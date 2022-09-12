# webpack-serve-output

`webpack-serve-output` can outputs content compiled by `webpack-dev-server` to the file system, and the files can be hot updated.

[![NPM version](https://img.shields.io/npm/v/webpack-serve-output.svg)](https://www.npmjs.com/package/webpack-serve-output)
[![GITHUB star](https://img.shields.io/github/stars/zh-lx/webpack-serve-output.svg)](https://github.com/zh-lx/webpack-serve-output)
[![MIT-license](https://img.shields.io/npm/l/webpack-serve-output.svg)](https://opensource.org/licenses/MIT)

## Installation

```purl
npm install webpack-serve-output
```

## Usage

Add `webpack-serve-output` to plugins in the `webpack.config.js` file,  it will output content compiled by `webpack-dev-server` to the file system when the serve is running.

The output directory is `output.path` in the config of webpack by default.

```js
// webpack.config.js

const WebpackServeOutput = require('webpack-serve-output');

module.exports = {
  // ...other config
  plugins: [new WebpackServeOutput()],
};
```

Specifies the output directory:

```js
// webpack.config.js

const path = require('path');
const WebpackServeOutput = require('webpack-serve-output');

module.exports = {
  // ...other config
  plugins: [new WebpackServeOutput({
    outputPath: path.resolve(__dirname, './output')
  })],
};
```

## License

Licensed under MIT

Copyright (c) 2022 [zhoulixiang](https://github.com/zh-lx)