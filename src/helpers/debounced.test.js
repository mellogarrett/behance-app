import debounced from "./debounced";

const delayedHelloWorld = debounced(500, () => console.log("Hello World"));

it("should return a function", () => {
  expect(typeof delayedHelloWorld).toBe("function");
});

test("the returned function should return a promise that resolves correctly", () => {
  expect(delayedHelloWorld()).resolves;
});
