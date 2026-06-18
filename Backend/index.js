const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
// kamransalauddin186_db_user
// book_store_mern_app_db_user
// BDtZZ5k94FpqwBrp
async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}

main()
  .then(() => console.log("MongoDB connect successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
