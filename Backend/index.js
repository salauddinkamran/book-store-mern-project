const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
// kamransalauddin186_db_user
// book_store_mern_app_db_user
// BDtZZ5k94FpqwBrp

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

// routes
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}


main()
  .then(() => {
    (console.log("MongoDB connect successfully!"),
      console.log("Database:", mongoose.connection.name));
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
