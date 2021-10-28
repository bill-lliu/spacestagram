import fetchDefault from "./fetchDefault";
// const fetchDefault = require("./fetchDefault");

describe("fetchDefault", () => {
  it("should fetch APOD data for the past week as an array", async () => {
    const fetchData = await fetchDefault();
    expect(Array.isArray(fetchData)).toBe(true);
  });
  it("should have each day stored as an object", async () => {
    const fetchData = await fetchDefault();
    expect(fetchData[0] && typeof fetchData[0] === "object").toBe(true);
  });
});
