import axios from "axios";

export default searchValue =>
  searchValue.trim() === ""
    ? Promise.resolve([])
    : axios
        .get(
          `http://localhost:4000/users?client_id=dssemmf08U5GJTfD3sGC7iWfSvjanYaf&per_page=10&q=${searchValue}`
        )
        .then(response => response.data.users.filter(u => u.username !== ""));
