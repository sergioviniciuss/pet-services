module.exports = (app) => {
  app.get("/services", (req, res) => {
    res.send("You're in services route");
  });
};
