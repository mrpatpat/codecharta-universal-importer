import { AnalyzedFile } from "../model/analyzed-file";

export class CodechartaExporter {

    public static build(projectName: string, analyzedFiles: AnalyzedFile[]) :string {

        const cc = {
            "projectName": projectName,
            "apiVersion": "1.0",
            "nodes": [
                {
                    "name": "root",
                    "type": "Folder",
                    "children": []
                }
            ]
        };

        return JSON.stringify(cc);

    }

}