import CodechartaUniversalImporter from "../src/codecharta-universal-importer"
import { AnalyzedFile } from "../src/model/analyzed-file";

describe("CodechartaUniversalImporter", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("CodechartaUniversalImporter is instantiable", () => {
    expect(new CodechartaUniversalImporter()).toBeInstanceOf(CodechartaUniversalImporter)
  })

  it("should return correct analyzed files", () => {
    const i = new CodechartaUniversalImporter();
    const analyzed: AnalyzedFile[] = i.analyzeDirectory("test/sample-projects/typescript");
    expect(analyzed).toMatchSnapshot();
  })

  it("should correctly analyze prettierJS", () => {
    const i = new CodechartaUniversalImporter();
    const analyzed: AnalyzedFile[] = i.analyzeDirectory("test/sample-projects/javascript/prettier");
    expect(analyzed).toMatchSnapshot();
  })
  
  it("should correctly analyze files and export into a cc map", () => {
    const i = new CodechartaUniversalImporter();
    const cc: string = i.buildCodechartaFromDirectory("test/sample-projects/javascript/prettier", "PrettierJS");
    expect(cc).toMatchSnapshot();
  })

})
