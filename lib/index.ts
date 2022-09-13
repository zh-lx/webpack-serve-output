const fs = require('fs-extra');
const path = require('path');

interface OutputOptions {
  outputPath?: string; // 文件输出目录，不传则默认使用 output 中的 path
}

class WebpackServeOutput {
  options: OutputOptions;

  constructor(options?: OutputOptions) {
    this.options = options || {
      outputPath: '',
    };
  }

  apply(complier) {
    complier.hooks.emit.tapAsync(
      'webpack-serve-output',
      (compilation, callback) => {
        const outputPath = this.options.outputPath || complier.outputPath;
        outputFiles(compilation, outputPath);
        callback();
      }
    );
  }
}

function outputFiles(compilation, outputPath) {
  for (let filename in compilation.assets) {
    const file = path.join(outputPath, filename);
    const content = compilation.assets[filename].source();
    fs.outputFileSync(file, content);
  }
}

export = WebpackServeOutput;
