import { Provider } from "./provider";

export class UnaryProvider implements Provider{

    analyze(code: string, path: string): Metrics {
        return { unary: "1" };
    }

}