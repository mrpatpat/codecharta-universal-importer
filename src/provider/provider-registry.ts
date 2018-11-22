import { Provider } from "./provider";
import { Languages } from "../model/languages";
import { SlocProvider } from "./sloc-provider";
import { UnaryProvider } from "./unary-provider";

export class ProviderRegistry {

    private providerMap: LanguageToProviderMapping[] = []

    constructor() {
        this.register(Languages.TYPESCRIPT, new SlocProvider("ts"));
        this.register(Languages.JAVASCRIPT, new SlocProvider("js"));
        this.register(Languages.ALL, new UnaryProvider());
    }

    register(language: Languages, provider: Provider) {
        this.providerMap.push(new LanguageToProviderMapping(language, provider));
    }

    getProvider(language: Languages): Provider[] {
        return this.providerMap
            .filter(mapping => mapping.getLanguage() === language || mapping.getLanguage() === Languages.ALL)
            .map(p => p.getProvider());
    }

}

class LanguageToProviderMapping {

    constructor(private language: Languages, private provider: Provider) { }

    public getLanguage(): Languages {
        return this.language;
    }

    public getProvider(): Provider {
        return this.provider;
    }

}