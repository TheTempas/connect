const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

const friendDatabase = {
  "friend1": "Anna",
  "friend2": "Ben"
}

app.get("/", (req, res) => {
  res.end("Splash");
});

app.get("/friends.json", (req, res) => {
  res.json(friendDatabase);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});