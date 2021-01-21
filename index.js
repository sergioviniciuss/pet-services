const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("server running on port 3000...");
});

app.get("/services", (req, res) => {
  res.send("You're in services route");
});

app.get("/test", (req, res) => {
  res.send("You're in services route");
});
