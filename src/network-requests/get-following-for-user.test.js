import getFollowingForUser from "./get-following-for-user";

it("should resolve an empty search to an empty array", () => {
  expect(getFollowingForUser()).resolves.toEqual([]);
});

it("should resolve a non-empty search", () => {
  expect(getFollowingForUser("64855851")).resolves;
});

it("should return an Array", async () => {
  const following = await getFollowingForUser(64855851);
  expect(following).toBeInstanceOf(Array);
});
