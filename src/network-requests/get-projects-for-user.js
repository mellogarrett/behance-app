import axios from "axios";

export default userId =>
  userId === null
    ? Promise.resolve([])
    : axios
        .get(
          `http://localhost:4000/users/${userId}/projects?client_id=dssemmf08U5GJTfD3sGC7iWfSvjanYaf&per_page=10`
        )
        .then(response => response.data.projects);
