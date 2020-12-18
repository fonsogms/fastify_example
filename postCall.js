const fetch = require("node-fetch");
const axios = require("axios");

// fetch("http://localhost:3000/cheese/roquefort", {
//   method: "post",
//   body: JSON.stringify({ a: 2 }),
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

axios
  .post("http://localhost:3000/cheese/roquefort", { a: 2 })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
