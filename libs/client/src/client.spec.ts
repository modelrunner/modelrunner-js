import { buildUrl } from "./request";

describe("The function test suite", () => {
  it("should build the URL with a function username/app-alias", () => {
    const alias = "modelrunner/text-to-image";
    const url = buildUrl(alias);
    expect(url).toMatch(`modelrunner.run/${alias}`);
  });
});
