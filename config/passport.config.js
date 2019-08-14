const LocalStategy = require("passport-local").Strategy;

const User = require("../models/user.model");

module.exports = passport => {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });

  // Signup
  passport.use("local-signup", new LocalStategy({
    passReqToCallback: true
  }, (req, username, password, done) => {
    let newUser = new User({
      username: username,
      name: req.body.name,
      email: req.body.email
    });
    newUser.password = newUser.generateHash(password);
    newUser.save(err => {
      if (err) throw err;
      return done(null, newUser);
    });
  }));

  // Login
  passport.use("local-login", new LocalStategy({
    passReqToCallback: true
  }, (req, username, password, done) => {
    User.findOne({
      username: username
    }, (err, user) => {
      console.log(user);
      if (err) throw err;
      // req.flash is the way to set flashdata using connect-flash
      if (!user)
        return done(null, false, req.flash("loginMessage", "No user found."));
      if (!user.validatePassword(password))
        return done(null, false, req.flash("loginMessage", "Oops! Wrong password.")); // create the loginMessage and save it to session as flashdata

      // all is well, return successful user
      return done(null, user);
    });
  }));
};