module.exports = (app, passport, UserModel) => {

  // Home Page
  app.get("/", (req, res) => res.render("home", {
    isAuth: req.isAuthenticated(),
    user: req.user
  }));

  // Login
  app.get("/login", (req, res) => res.render("login", {
    message: req.flash("loginMessage"),
    isAuth: req.isAuthenticated(),
    user: req.user
  }));

  app.post("/login", passport.authenticate("local-login", {
    successRedirect: "/profile", // redirect to the secure profile section
    failureRedirect: "/login", // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  // Signup
  app.get("/signup", (req, res) => res.render("signup", {
    isAuth: req.isAuthenticated(),
    user: req.user
  }));

  app.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup"
  }));

  // Profile
  app.get("/profile", isLoggedIn, (req, res) => {
    let redirectUrl = `/user/${req.user.username}`;
    res.redirect(redirectUrl);
  });

  app.get("/user/:username", (req, res) => {
    let username = req.params.username;
    UserModel.findOne({
      username
    }, (err, doc) => {
      if (err) throw err;
      if (!doc)
        res.render("404", {
          isAuth: req.isAuthenticated(),
          user: req.user,
          profile: null,
        });
      else {
        res.render("profile", {
          isAuth: req.isAuthenticated(),
          user: req.user,
          profile: doc,
          isRoot: req.isAuthenticated() ? doc.username === req.user.username : false
        });
      }
    });

  });
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/check-username-availability", (req, res) => {
    UserModel.find((err, users) => {
      if (err) throw err;
      let usernames = users.map(val => val.username);
      res.json(usernames);
    });
  });

  // About Page
  app.get("/about", (req, res) => {
    res.render("about", {
      isAuth: req.isAuthenticated(),
      user: req.user,
    });
  });

  app.get("*", (req, res) => {
    res.render("404", {
      isAuth: req.isAuthenticated(),
      user: req.user,
    });
  });
};

function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the home page
  res.redirect("/");
}