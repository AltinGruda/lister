const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function (passport) {
  passport.use(new GoogleStrategy({
    clientID: `${process.env.CLIENT_ID}`,
    clientSecret: `${process.env.CLIENT_SECRET}`,
    callbackURL: "/auth/google/callback"
  },
    function (_, __, profile, done) {
  
      User.findOne({ googleId: profile.id }, async (err, user) => {
  
        if (err) {
          return done(err, null);
        }

        // if (user) {
        //   done(null, user)
        // } else {
        //   user = User.create(newUser)
        //   done(null, user)
        // }
  
        if (!user) {
          const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
          };
  
          user = await User.create(newUser);
          done(null, user);
        }
        done(null, user);
      })
  
    }));
  // passport.use(
  //   new GoogleStrategy(
  //     {
  //       clientID: process.env.CLIENT_ID,
  //       clientSecret: process.env.CLIENT_SECRET,
  //       callbackURL: '/auth/google/callback',
  //       scope: ["profile", "email"],
  //     },
  //     async (accessToken, refreshToken, profile, done) => {
  //       const newUser = {
  //         googleId: profile.id,
  //         displayName: profile.displayName,
  //         firstName: profile.name.givenName,
  //         lastName: profile.name.familyName,
  //         image: profile.photos[0].value,
  //       }

  //       try {
  //         let user = await User.findOne({ googleId: profile.id })

  //         if (user) {
  //           done(null, user)
  //         } else {
  //           user = await User.create(newUser)
  //           done(null, user)
  //         }
  //       } catch (err) {
  //         console.error(err)
  //       }
  //     }
  //   )
  // )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}