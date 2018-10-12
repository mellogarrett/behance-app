const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

const proxy = async (req, res) => {
  try {
    const response = await axios
      .get(`https://api.behance.net/v2${req.url}`)
      .then(r => r.data);
    res.send(response);
  } catch (err) {
    const { statusText: message, status } = err.response;
    res.status(status).send({ message });
  }
};

app.get("/*", proxy);
// app.post("/*", proxy);

app.listen(4000, () => console.log("Server listening on port 4000"));
