const getHomePage = async (req, res, next) => {
  res.render("index", {
    layout: "./layouts/_layouts.ejs",
    link1: "nav-active-link",
    link2: "",
    link3: "",
    link4: "",
    link5: "",
  
  });
};

const getApartDetail = async (req, res, next) => {
  res.render("apart_detail", {
    layout: "./layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "nav-active-link",
    link4: "",
    link5: "",
  });
};
const getAboutUs = async (req, res, next) => {
  res.render("about_us", {
    layout: "./layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
  });
};
const getContact = async (req, res, next) => {
  res.render("contact", {
    layout: "./layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "",
    link4: "",
    link5: "nav-active-link",
  });
};
const getAparts = async (req, res, next) => {
  res.render("defaultCategory", {
    layout: "./layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "nav-active-link",
    link4: "",
    link5: "",
  });
};
const getNewsDetail = async (req, res, next) => {
  res.render("news_detail", {
    layout: "./layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "",
    link4: "nav-active-link",
    link5: "",
  });
};
const getNews = async (req, res, next) => {
  res.render("news", {
    layout: "./layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "",
    link4: "nav-active-link",
    link5: "",
  });
};
const getOurValues = async (req, res, next) => {
  res.render("our_values", {
    layout: "./layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
  });
};
const getSquad = async (req, res, next) => {
  res.render("squad", {
    layout: "./layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
  });
};
const getVisionMision = async (req, res, next) => {
  res.render("vision_mision", {
    layout: "./layouts/_layouts.ejs",
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
  getVisionMision
};
