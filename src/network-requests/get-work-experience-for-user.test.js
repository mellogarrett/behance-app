import getWorkExperienceForUser from "./get-work-experience-for-user";

it("should resolve an empty search to an empty array", () => {
  expect(getWorkExperienceForUser(null)).resolves.toEqual([]);
});

it("should return an Array", async () => {
  expect(Array.isArray(await getWorkExperienceForUser("matiascorea"))).toBe(
    true
  );
});
