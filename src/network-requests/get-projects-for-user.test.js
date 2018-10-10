import getProjectsForUserSearch from "./get-projects-for-user";

it("should resolve an empty search to an empty array", () => {
  expect(getProjectsForUserSearch("")).resolves.toEqual([]);
});

it("should resolve a non-empty search", () => {
  expect(getProjectsForUserSearch("64855851")).resolves;
});
