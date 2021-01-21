module.exports = (app) => {
  app.get("/services", (req, res) => {
    res.send("You're in services route and making a GET request");
  });

  app.post("/services", (req, res) => {
    console.log(req.body);
    res.send("You're in services route and making a POST request");
  });
};
