import { Languages } from "../model/languages";

export class LanguageMapper {

    public static getLanguageFromPath(path: string) {
        const suffix = path.split(".").pop();
        switch(suffix) {
            case "ts": 
            case "tsx":
                return Languages.TYPESCRIPT;
            case "js": 
            case "jsx":
                return Languages.JAVASCRIPT;        
            default:     
                return Languages.UNKNOWN;
        };
    }

}