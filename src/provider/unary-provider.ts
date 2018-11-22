import { Provider } from "./provider";

export class UnaryProvider implements Provider{

    analyze(code: string): Metrics {
        return { unary: "1" };
    }

}