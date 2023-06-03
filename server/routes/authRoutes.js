const router = require("express").Router();
const passport = require("passport");
require("dotenv").config({ path: "./config/.env" });

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:5173/', session: true }),
  function (req, res) {
    res.redirect('http://localhost:5173/');
});

router.get("/logout", (req, res) => {
	if (req.user) {
	  req.logout(req.user, err => {
		if(err) return next(err);
		res.send("done");
	  });
	}
})

router.get("/getuser", (req, res) => {
	res.send(req.user);
})
module.exports = router;