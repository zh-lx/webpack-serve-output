declare const fs: any;
declare const path: any;
interface OutputOptions {
    outputPath?: string;
}
declare class WebpackServeOutput {
    options: OutputOptions;
    constructor(options?: OutputOptions);
    apply(complier: any): void;
}
declare function outputFiles(compilation: any, outputPath: any): void;
