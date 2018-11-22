import { readdirSync, lstatSync, readFileSync } from "fs-extra";
import * as path from "path";

export class FileReader {

    public collectFiles(dir: string): string[] {
        let result: string[] = [];
        readdirSync(dir).forEach(file => {
            const fullPath = path.join(dir, file);
            if (lstatSync(fullPath).isDirectory()) {
                result = result.concat(this.collectFiles(fullPath));
            } else {
                result.push(fullPath.replace(/\\/g,"/"));
            }
        });
        return result;
    }

    public readFile(path: string): string {
        return readFileSync(path, 'utf8');
    }

}