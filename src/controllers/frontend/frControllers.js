const Apart = require("../../model/_apartModel");



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
  res.render("./frontend/apart_detail", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "nav-active-link",
    link4: "",
    link5: "",
  });
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

  const result = await Apart.find({});

  res.render("./frontend/defaultCategory", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "nav-active-link",
    link4: "",
    link5: "",
    apart: result
  });
};
const getNewsDetail = async (req, res, next) => {
  res.render("./frontend/news_detail", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "",
    link4: "nav-active-link",
    link5: "",
  });
};
const getNews = async (req, res, next) => {
  res.render("./frontend/news", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "",
    link3: "",
    link4: "nav-active-link",
    link5: "",
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
  getVisionMision
};
