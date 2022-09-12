interface OutputOptions {
    outputPath?: string;
}
declare class WebpackServeOutput {
    options: OutputOptions;
    constructor(options?: OutputOptions);
    apply(complier: any): void;
}
export default WebpackServeOutput;
