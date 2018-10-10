import userSearch from "./user-search";

it("should resolve an empty search to an empty array", () => {
  expect(userSearch("")).resolves.toEqual([]);
});

it("should resolve a non-empty search to an array with results", () => {
  expect(
    userSearch("a").then(result => result.length)
  ).resolves.toBeGreaterThan(0);
});

it("should return an Array", async () => {
  expect(Array.isArray(await userSearch("a"))).toBe(true);
});
