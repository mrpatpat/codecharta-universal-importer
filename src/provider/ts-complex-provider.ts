import { Provider } from "./provider";
import * as tscomplex from "ts-complex";

export class TsComplexProvider implements Provider{

    analyze(code: string, path: string): Metrics {
        // TODO calculates bad stuff
        const maintainability = tscomplex.calculateMaintainability(path);
        const halstead = tscomplex.calculateHalstead(path);
        const complexity = tscomplex.calculateCyclomaticComplexity(path);
        const result = {...maintainability, ...halstead, ...complexity};
        return result;
    }

}