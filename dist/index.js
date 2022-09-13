"use strict";
var fs = require('fs-extra');
var path = require('path');
var WebpackServeOutput = /** @class */ (function () {
    function WebpackServeOutput(options) {
        this.options = options || {
            outputPath: '',
        };
    }
    WebpackServeOutput.prototype.apply = function (complier) {
        var _this = this;
        complier.hooks.emit.tapAsync('webpack-serve-output', function (compilation, callback) {
            var outputPath = _this.options.outputPath || complier.outputPath;
            outputFiles(compilation, outputPath);
            callback();
        });
    };
    return WebpackServeOutput;
}());
function outputFiles(compilation, outputPath) {
    for (var filename in compilation.assets) {
        var file = path.join(outputPath, filename);
        var content = compilation.assets[filename].source();
        fs.outputFileSync(file, content);
    }
}
module.exports = WebpackServeOutput;
//# sourceMappingURL=index.js.map