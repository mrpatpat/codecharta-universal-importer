import { Provider } from "./provider";
import calculateSonarMetrics from "tslint-sonarts/lib/runner/metrics";
import * as ts from "typescript";

export class SonarTsProvider implements Provider{

    analyze(code: string): Metrics {
        const sourceFile = ts.createSourceFile('somefile.ts', code, ts.ScriptTarget.Latest, true);
        const result = calculateSonarMetrics(sourceFile);
        return {
            sonarts_cognitiveComplexity: result.cognitiveComplexity + "",
            sonarts_complexity: result.complexity + "",
            sonarts_classes: result.classes + "",
            sonarts_statements: result.statements + "",
            sonarts_functions: result.functions + "",
            sonarts_executableLines: result.executableLines.length + "",
            sonarts_nosonarLines: result.nosonarLines.length + "",
            sonarts_commentLines: result.commentLines.length + "",
            sonarts_ncloc: result.ncloc.length + ""
        };
    }

}