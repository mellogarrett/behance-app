import get from "./get";

it("should return 0 even though 0 is falsey", () => {
  const obj = {
    a: "a",
    b: 0,
    c: null,
    d: undefined
  };

  expect(get(obj, ["a"])).toEqual("a");
  expect(get(obj, ["b"])).toEqual(0);
  expect(get(obj, ["c"])).toBeNull();
  expect(get(obj, ["d"])).toBeNull();
});
