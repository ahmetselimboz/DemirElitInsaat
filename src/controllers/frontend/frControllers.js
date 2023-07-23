const Apart = require("../../model/_apartModel");
const News = require("../../model/_newsModel");

const getHomePage = async (req, res, next) => {
  res.render("./frontend/index", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "nav-active-link",
    link2: "",
    link3: "",
    link4: "",
    link5: "",
  });
};

const getApartDetail = async (req, res, next) => {
  try {
    if (req.params) {
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
  res.render("./frontend/about_us", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
  });
};
const getContact = async (req, res, next) => {
  res.render("./frontend/contact", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "",
    link4: "",
    link5: "nav-active-link",
  });
};
const getAparts = async (req, res, next) => {
  try {
    if (req.params) {
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

  res.render("./frontend/news", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "",
    link4: "nav-active-link",
    link5: "",
    news: result,
  });
};
const getOurValues = async (req, res, next) => {
  res.render("./frontend/our_values", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
  });
};
const getSquad = async (req, res, next) => {
  res.render("./frontend/squad", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
  });
};
const getVisionMision = async (req, res, next) => {
  res.render("./frontend/vision_mision", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
  });
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
};
