import { ProviderRegistry } from "./provider/provider-registry";
import { AnalyzedFile } from "./model/analyzed-file";
import { FileSystemAnalyzer } from "./analyzer/file-system-analyzer";

export default class CodechartaUniversalImporter {

    private providerRegistry: ProviderRegistry;

    constructor() {
        this.providerRegistry = new ProviderRegistry();
    }

    public analyzeDirectory(dir: string): AnalyzedFile[] {
        const fsa = new FileSystemAnalyzer(this.providerRegistry);
        return fsa.analyze(dir);
    }

}
