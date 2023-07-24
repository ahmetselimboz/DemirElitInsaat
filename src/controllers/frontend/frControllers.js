const Apart = require("../../model/_apartModel");
const Contact = require("../../model/_contactModel");
const Message = require("../../model/_messageModel");
const News = require("../../model/_newsModel");

const getHomePage = async (req, res, next) => {
  const contact = await Contact.findOne({});
  res.render("./frontend/index", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "nav-active-link",
    link2: "",
    link3: "",
    link4: "",
    link5: "",
    contact: contact,
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
  res.render("./frontend/about_us", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
    contact: contact,
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

  res.render("./frontend/our_values", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
    contact: contact,
  });
};
const getSquad = async (req, res, next) => {
  const contact = await Contact.findOne({});

  res.render("./frontend/squad", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
    contact: contact,
  });
};
const getVisionMision = async (req, res, next) => {
  const contact = await Contact.findOne({});

  res.render("./frontend/vision_mision", {
    layout: "./frontend/layouts/_layouts.ejs",
    link1: "",
    link2: "nav-active-link",
    link3: "",
    link4: "",
    link5: "",
    contact: contact,
  });
};

const postMessage = (req, res, next) => {
  if(req.body){
    const message = new Message({
      name: req.body.name,
      surname: req.body.surname,
      title: req.body.title,
      phone_num: req.body.phone_num,
      content: req.body.content,
      read: false,
    })
    message.save();
    res.redirect("/");
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
};
