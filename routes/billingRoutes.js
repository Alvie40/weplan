const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");
const ExperienceModel = require("../models/Experience");

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    console.log("req.bodyyy", req.body);
    const { amount, token, experienceId } = req.body;
    try {
      await stripe.charges.create({
        amount,
        currency: "usd",
        source: token
      });

      const update = await ExperienceModel.findOneAndUpdate(
        { _id: experienceId },
        { $inc: { amountReceived: amount } },
        { new: true }
      );
      res.send(update);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};
