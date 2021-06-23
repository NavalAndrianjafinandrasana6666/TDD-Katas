import { add } from "../src/sample";

describe("Sample", () => {
  it("should return summation of two numbers", () => {
    const result = add(1, 2);

    expect(result).toEqual(3);
  });
});