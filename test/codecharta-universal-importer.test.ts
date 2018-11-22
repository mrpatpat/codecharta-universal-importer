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
    const analyzed: AnalyzedFile[] = i.analyzeDirectory("test/sample-projects");
    expect(analyzed).toMatchSnapshot();
  })

  it("pg", () => {
    const i = new CodechartaUniversalImporter();
    const analyzed: AnalyzedFile[] = i.analyzeDirectory("src");
    console.log(analyzed);
  })

})
