import axios from "axios";

export default userId =>
  userId === null
    ? Promise.resolve([])
    : axios
        .get(
          `http://localhost:4000/users/${userId}/work_experience?client_id=dssemmf08U5GJTfD3sGC7iWfSvjanYaf`
        )
        .then(response => response.data.work_experience);
