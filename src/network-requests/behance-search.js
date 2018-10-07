import axios from "axios";

export default searchValue => {
  return axios.get(
    `http://localhost:4000/users?client_id=dssemmf08U5GJTfD3sGC7iWfSvjanYaf&per_page=10&q=${searchValue}`
  );
};
