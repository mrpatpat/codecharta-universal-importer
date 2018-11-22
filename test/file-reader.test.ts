import { FileReader } from "../src/util/file-reader"

describe("FileReader", () => {

  it("should read multiple files in a given directory", async () => {
    const fr = new FileReader();
    const result = fr.collectFiles("test/sample-projects");
    expect(result).toEqual([
      "test/sample-projects/typescript/hello-universe.ts",
      "test/sample-projects/typescript/hello-world.ts"
    ]);
  })

  it("should read multiple file contents in a given directory", async () => {
    const fr = new FileReader();
    const files = fr.collectFiles("test/sample-projects");
    const contents = files.map(file => fr.readFile(file));
    expect(contents).toMatchSnapshot();
  })

})
