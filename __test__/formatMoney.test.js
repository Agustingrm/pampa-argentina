import formatMoney from "../lib/formatMoney";

describe("format Money function", () => {
  it("works with fractional dollars", () => {
    expect(formatMoney(5)).toEqual("$0.05");
    expect(formatMoney(25)).toEqual("$0.25");
    expect(formatMoney(90)).toEqual("$0.90");
  });

  it("leaves off cents when its whole dollars", () => {
    expect(formatMoney(1000)).toEqual("$10");
    expect(formatMoney(300)).toEqual("$3");
    expect(formatMoney(2500000)).toEqual("$25,000");
  });

  it("works with whole and fractional dollars", () => {
    expect(formatMoney(123)).toEqual("$1.23");
    expect(formatMoney(9876)).toEqual("$98.76");
    expect(formatMoney(5432)).toEqual("$54.32");
    expect(formatMoney(101010101010)).toEqual("$1,010,101,010.10");
  });
});
