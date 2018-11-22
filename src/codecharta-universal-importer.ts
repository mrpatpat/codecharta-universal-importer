import { FileReader } from "../src/util/file-reader"
import { ProviderRegistry } from "./provider/provider-registry";
import { Languages } from "./model/languages";
import { Provider } from "./provider/provider";
import { AnalyzedFile } from "./model/analyzed-file";
import { LanguageMapper } from "./util/language-mapper";

export default class CodechartaUniversalImporter {

    private providerRegistry: ProviderRegistry;

    constructor() {
        this.providerRegistry = new ProviderRegistry();
    }

    public analyze(dir: string): AnalyzedFile[] {
        const fr = new FileReader();
        const files = fr.collectFiles(dir);
        return files.map(file => {
            const code = fr.readFile(file);
            const language = LanguageMapper.getLanguageFromPath(file);
            return this.analyzeFile(file, code, language);
        });
    }

    private analyzeFile(path: string, content: string, language: Languages): AnalyzedFile {
        const provider: Provider[] = this.providerRegistry.getProvider(language);
        const result = new AnalyzedFile(path);
        provider.forEach(p=>result.addMetrics(p.analyze(content, path)));
        return result;
    }

}
