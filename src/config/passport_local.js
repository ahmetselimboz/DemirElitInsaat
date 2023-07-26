const LocalStrategy = require("passport-local").Strategy;
const User = require("../model/_userModel");
const bcrypt = require("bcrypt");

module.exports = function (passport) {
  const options = {
    usernameField: "user_name",
    passwordField: "password",
  };

  passport.use(
    new LocalStrategy(options, async (user_name, password, done) => {
      try {
        const _findUser = await User.findOne({ user_name: user_name });
        //console.log(_findUser);
        if (!_findUser) {
          return done(null, false, {
            message: "Böyle bir kullanıcı kaydı bulunamadı",
          });
        }
        const checkPassword = await bcrypt.compare(
          password,
          _findUser.password
        );
        if (!checkPassword) {
          return done(null, false, {
            message: "Şifrenizin doğru olduğundan emin olunuz",
          });
        } else {
          return done(null, _findUser, { message: "Giriş yapıldı" });
        }
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.serializeUser(function (user, done) {
    process.nextTick(function () {
      done(null, { id: user.id });
    });
  });

  passport.deserializeUser(async function (user, done) {
    if (user) {
          const userInfo = await User.findById(user.id);
      if (userInfo) {
        return done(null, userInfo);
      } else {
        return done(null, userInfo);
      }
    }
  });
};
