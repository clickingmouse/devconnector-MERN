const express = require("express");
const mongoose = require("mongoose");
const app = express();

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//DB config
const db = require("./config/keys").mongoURI;
//console.log(":::"db)
// connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("connected to database"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("hello World~~!");
});

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
