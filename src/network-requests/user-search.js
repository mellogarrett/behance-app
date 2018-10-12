import axios from "axios";

export default searchValue => {
  console.log({ search: searchValue.trim() });
  return searchValue.trim() === ""
    ? Promise.resolve([])
    : axios
        .get(
          `http://localhost:4000/users?q=${searchValue}&api_key=dssemmf08U5GJTfD3sGC7iWfSvjanYaf`
        )
        .then(response =>
          response.data.users.filter(u => u.username !== "").slice(0, 10)
        );
};
