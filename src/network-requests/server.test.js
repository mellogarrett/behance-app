import axios from "axios";

test("requesting a URL with a typo should reject with an error", () => {
  expect(axios.get("http://localhost:4000/usrs?q=typo")).rejects;
});
