const router = require("express").Router();
const passport = require("passport");
require("dotenv").config({ path: "./config/.env" });

//different than 100dev

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

router.get("/logout", (req, res) => {
	req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect(process.env.CLIENT_URL);
    });
});

module.exports = router;