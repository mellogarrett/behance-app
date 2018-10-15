import getFollowersForUser from "./get-followers-for-user";

it("should resolve an empty search to an empty array", () => {
  expect(getFollowersForUser()).resolves.toEqual([]);
});

it("should resolve a non-empty search", () => {
  expect(getFollowersForUser("64855851")).resolves;
});

it("should return an Array", async () => {
  const followers = await getFollowersForUser("64855851");
  expect(followers).toBeInstanceOf(Array);
});
