const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
// const passport = require("passport");
const bodyParser = require("body-parser");

const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.use(express.static("public"));
// app.use("/uploads", express.static(path.join(__dirname, "/src/uploads")))
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));

// //require('./src/config/bookApi');

require("./src/config/database");
const MongoDBStore = require("connect-mongodb-session")(session);

const sessionStore = new MongoDBStore({
  uri: process.env.MONGODB_CONNECTION_STRING,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
    store: sessionStore,
  })
);

app.use(flash());
app.use((req, res, next) => {
  res.locals.validation_error = req.flash("validation_error");
  res.locals.success_message = req.flash("success_message");
 
  res.locals.error = req.flash("error");

  res.locals.project_name = req.flash("project_name");
  res.locals.room_num = req.flash("room_num");
  res.locals.bath_num = req.flash("bath_num");
  res.locals.brut_m2 = req.flash("brut_m2");
  res.locals.net_m2 = req.flash("net_m2");
  res.locals.block_num = req.flash("block_num");
  res.locals.apart_num = req.flash("apart_num");
  res.locals.floors_num = req.flash("floors_num");
  res.locals.adress = req.flash("adress");
  res.locals.desc = req.flash("desc");
  res.locals.location_url = req.flash("location_url");

  res.locals.news_name = req.flash("news_name");
  res.locals.news_desc = req.flash("news_desc");
  res.locals.news_url = req.flash("news_url");

  res.locals.facebook_url = req.flash("facebook_url");
  res.locals.instagram_url = req.flash("instagram_url");
  res.locals.twitter_url = req.flash("twitter_url");
  res.locals.linkedln_url = req.flash("linkedln_url");
  res.locals.phone1 = req.flash("phone1");
  res.locals.phone2 = req.flash("phone2");
  res.locals.mail = req.flash("mail");
  res.locals.location = req.flash("location");
  res.locals.location_link = req.flash("location_link");

  next();
});

// app.use(passport.initialize());
// app.use(passport.session());
// //app.use(passport.authenticate('session'));

const frRouter = require("./src/routers/frontend/frRouters");
const adminRouters = require("./src/routers/admin/adminRouters");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res, next) => {

//   res.redirect("/");
// });

app.use("/", frRouter);
app.use("/yonetim", adminRouters);
// app.use("/auth", authRouter);
// app.use("/mobile", mobile_frRouter);
// app.use("/mobile/auth", mobile_authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is standing to ${process.env.PORT} port`);
});
