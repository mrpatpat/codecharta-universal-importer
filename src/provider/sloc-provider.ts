import * as sloc from "sloc";
import { Provider } from "./provider";

export class SlocProvider implements Provider{

    constructor(private language: string) {}

    analyze(code: string): Metrics {
        const stats = sloc(code, this.language);
        const metrics: Metrics = {}; 
        for(let i in sloc.keys){
            metrics["sloc_" + sloc.keys[i] + "_lines"] = stats[sloc.keys[i]]+"";
        }
        return metrics;
    }

}