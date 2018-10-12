import getWorkExperience from "./get-work-experience";

it("should resolve an empty search to an empty array", () => {
  expect(getWorkExperience(null)).resolves.toEqual([]);
});

it("should return an Array", async () => {
  expect(Array.isArray(await getWorkExperience("matiascorea"))).toBe(true);
});
