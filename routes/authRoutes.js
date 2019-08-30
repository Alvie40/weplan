const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {failureRedirect: '/api/yoo'}),
    (req, res) => {
      console.log("userrrrrrrrrr", req.user);
      res.redirect("/surveys");
    }
  );

	app.get('/api/yoo', (req, res) => {
		console.log('got hereee failedddd')
		res.send('failed')
	});

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
