const About = require("../../model/_aboutModel");
const Apart = require("../../model/_apartModel");
const Contact = require("../../model/_contactModel");
const HomePage = require("../../model/_homepageModel");
const Message = require("../../model/_messageModel");
const News = require("../../model/_newsModel");
const OurValue = require("../../model/_ourvalueModel");
const Team = require("../../model/_teamModel");
const VisMis = require("../../model/_vismisModel");
const User = require("../../model/_userModel");
const passport = require("passport");
require("../../config/passport_local")(passport);
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

const getHomePage = async (req, res, next) => {
  const contact = await Contact.findOne({});
  const apart = await Apart.find({ homepage_view: true });
  const news = await News.find({}).sort({ createdAt: "desc" }).limit(9);
  const apar = await Apart.find({}).sort({ createdAt: "desc" }).limit(6);
  const hm = await HomePage.findOne();

  res.render("./frontend/index", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "nav-active-link",
    link2: "",
    link3: "",
    link4: "",
    link5: "",
    contact: contact,
    apart: apart,
    news: news,
    apar: apar,
    why: hm.why,
    static: hm.static,
    projects: hm.projects,
    haber: hm.news,
  });
};

const getApartDetail = async (req, res, next) => {
  try {
    if (req.params) {
      const contact = await Contact.findOne({});

      const result = await Apart.findById(req.params.id);
      if (result) {
        res.render("./frontend/apart_detail", {
          layout: "./frontend/layouts/_layouts.ejs",
          link1: "",
          link2: "",
          link3: "nav-active-link",
          link4: "",
          link5: "",
          apart: result,
          contact: contact,
        });
      }
    } else {
      req.flash("error", ["Bi hata oluştu. Lütfen tekrar deneyiniz."]);
    }
  } catch (error) {
    console.log(error);
  }
};
const getAboutUs = async (req, res, next) => {
  const contact = await Contact.findOne({});
  const about = await About.findOne({});
  const pres = await Team.findOne({ president: true });

  res.render("./frontend/about_us", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
    contact: contact,
    about: about,
    pres: pres,
  });
};
const getContact = async (req, res, next) => {
  const contact = await Contact.findOne({});
  res.render("./frontend/contact", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "",
    link4: "",
    link5: "nav-active-link",
    contact: contact,
  });
};
const getAparts = async (req, res, next) => {
  try {
    if (req.params) {
      const contact = await Contact.findOne({});
      var result;
      var title;
      if (req.params.link == "tum-projeler") {
        title = "Tüm Projeler";
        result = await Apart.find({});
      }
      if (req.params.link == "devam-eden-projeler") {
        title = "Devam Eden Projeler";
        result = await Apart.find({ project_status: "Devam Ediyor" });
      }
      if (req.params.link == "tamamlanan-projeler") {
        title = "Tamamlanan Projeler";
        result = await Apart.find({ project_status: "Tamamlandı" });
      }
      if (req.params.link == "gelecek-projeler") {
        title = "Gelecek Projeler";
        result = await Apart.find({ project_status: "Planlandı" });
      } else {
        req.flash("error", ["Bi hata oluştu. Lütfen tekrar deneyiniz."]);
      }

      res.render("./frontend/defaultCategory", {
        layout: "./frontend/layouts/_layouts.ejs",
        link1: "",
        link2: "",
        link3: "nav-active-link",
        link4: "",
        link5: "",
        apart: result,
        title: title,
        contact: contact,
      });
    } else {
      req.flash("error", ["Bi hata oluştu. Lütfen tekrar deneyiniz."]);
    }
  } catch (error) {
    console.log(error);
  }
};
const getNewsDetail = async (req, res, next) => {
  try {
    if (req.params) {
      const contact = await Contact.findOne({});
      const result = await News.findById(req.params.id);
      if (result) {
        res.render("./frontend/news_detail", {
          layout: "./frontend/layouts/_layouts.ejs",
          link1: "",
          link2: "",
          link3: "",
          link4: "nav-active-link",
          link5: "",
          news: result,
          contact: contact,
        });
      }
    } else {
      req.flash("error", ["Bi hata oluştu. Lütfen tekrar deneyiniz."]);
    }
  } catch (error) {
    console.log(error);
  }
};
const getNews = async (req, res, next) => {
  const result = await News.find({});
  const contact = await Contact.findOne({});

  res.render("./frontend/news", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "",
    link4: "nav-active-link",
    link5: "",
    news: result,
    contact: contact,
  });
};
const getOurValues = async (req, res, next) => {
  const contact = await Contact.findOne({});
  const our = await OurValue.find({});

  res.render("./frontend/our_values", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
    contact: contact,
    our: our,
  });
};
const getSquad = async (req, res, next) => {
  const contact = await Contact.findOne({});
  const pres = await Team.findOne({ president: true });
  const desc = await Team.findOne({ team_desc_check: true });
  const ekip = await Team.find({ team_desc_check: false, president: false });

  res.render("./frontend/squad", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
    contact: contact,
    pres: pres,
    desc: desc,
    ekip: ekip,
  });
};
const getVisionMision = async (req, res, next) => {
  const contact = await Contact.findOne({});
  const vismis = await VisMis.findOne({});
  res.render("./frontend/vision_mision", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
    contact: contact,
    vismis: vismis,
  });
};

const postMessage = (req, res, next) => {
  if (req.body) {
    const message = new Message({
      name: req.body.name,
      surname: req.body.surname,
      title: req.body.title,
      phone_num: req.body.phone_num,
      content: req.body.content,
      read: false,
    });
    message.save();
    res.redirect("/");
  }
};

const getLogin = (req, res, next) => {
  res.render("./admin/login", {
    layout: false,
  });
};
const postLogin = (req, res, next) => {
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("user_name", req.body.user_name);
    req.flash("password", req.body.password);

    res.redirect("/giris");
  } else {
    try {
      passport.authenticate("local", {
        successRedirect: "/yonetim",
        failureRedirect: "/giris",
        failureFlash: true,
        successFlash: true,
      })(req, res, next);
    } catch (error) {}
  }
};

const getRegister = (req, res, next) => {
  res.render("./admin/register", {
    layout: false,
  });
};

const postRegister = async (req, res, next) => {
  const hatalar = validationResult(req);
console.log(req.body);
  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("user_name", req.body.user_name);
    req.flash("password", req.body.password);

    res.redirect("/kayit");
  } else {
    try {
      const _user = await User.findOne({ user_name: req.body.user_name });

      if (_user) {
        req.flash("validation_error", [
          { msg: "Böyle bir kullanıcı adı mevcut" },
        ]);
        req.flash("user_name", req.body.user_name);
        req.flash("password", req.body.password);

        res.redirect("/kayit");
      } else {
        const newUser = new User({
          user_name: req.body.user_name,

          password: await bcrypt.hash(req.body.password, 10),
        });
        await newUser.save();
        console.log("Kullanici kaydedildi");
        res.redirect("/giris");
      }
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = {
  getHomePage,
  getApartDetail,
  getAboutUs,
  getContact,
  getAparts,
  getNewsDetail,
  getNews,
  getOurValues,
  getSquad,
  getVisionMision,
  postMessage,
  getLogin,
  postLogin,
  getRegister,
  postRegister,
};
