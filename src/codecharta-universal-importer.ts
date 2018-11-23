import { ProviderRegistry } from "./provider/provider-registry";
import { AnalyzedFile } from "./model/analyzed-file";
import { FileSystemAnalyzer } from "./analyzer/file-system-analyzer";
import { CodechartaExporter } from "./util/codecharta-exporter";

export default class CodechartaUniversalImporter {

    private providerRegistry: ProviderRegistry;

    constructor() {
        this.providerRegistry = new ProviderRegistry();
    }

    public analyzeDirectory(dir: string): AnalyzedFile[] {
        const fsa = new FileSystemAnalyzer(this.providerRegistry);
        return fsa.analyze(dir);
    }

    public buildCodechartaFromDirectory(dir: string, projectName: string): string {
        const analyzed = this.analyzeDirectory(dir);
        return CodechartaExporter.build(projectName, analyzed);
    }

}
