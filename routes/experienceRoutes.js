const keys = require("../config/keys");
const ExperienceModel = require("../models/Experience");

module.exports = app => {
  app.post("/api/experiences", (req, res) => {
    ExperienceModel.create(req.body)
      .then(experience => {
        res.send(experience);
      })
      .catch(err => res.status(400).send(err));
  });

  app.get("/api/experiences", async (req, res) => {
    ExperienceModel.find()
      .then(experiences => {
        res.send(experiences);
      })
      .catch(err => res.status(400).send(err));
  });

  app.get("/api/experiences/:id", async (req, res) => {
    ExperienceModel.find({ _id: req.params.id })
      .then(experience => {
        res.send(experience);
      })
      .catch(err => res.status(400).send(err));
  });
};
