const Apart = require("../../model/_apartModel");
const { uploadFile, deleteFile } = require("../../config/multer_config");
const { validationResult } = require("express-validator");
const News = require("../../model/_newsModel");

const getHomePage = async (req, res, next) => {
  res.render("./admin/ad_index", {
    layout: "./admin/layouts/admin_layouts.ejs",
  });
};
const getAllProjects = async (req, res, next) => {
  const result = await Apart.find({});

  res.render("./admin/ad_aparts", {
    layout: "./admin/layouts/admin_layouts.ejs",
    apart: result,
  });
};

const getAddApart = async (req, res, next) => {
  res.render("./admin/ad_apartDetail", {
    layout: "./admin/layouts/admin_layouts.ejs",
  });
};

const postAddApart = async (req, res, next) => {
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("project_name", req.body.project_name);
    req.flash("room_num", req.body.room_num);
    req.flash("bath_num", req.body.bath_num);
    req.flash("brut_m2", req.body.brut_m2);
    req.flash("net_m2", req.body.net_m2);
    req.flash("block_num", req.body.block_num);
    req.flash("apart_num", req.body.apart_num);
    req.flash("floors_num", req.body.floors_num);
    req.flash("adress", req.body.adress);
    req.flash("desc", req.body.desc);
    req.flash("location_url", req.body.location_url);

    res.redirect("/yonetim/projeler/daire-ekle");
  } else {
    var val = [];

    try {
      const { body, files } = req;

      for (let f = 0; f < files.length; f++) {
        await uploadFile(files[f]);
        if (data) {
          val.push(data);
        }
      }

      var apt = new Apart();

      apt.project_name = req.body.project_name;
      apt.room_num = req.body.room_num;
      apt.bath_num = req.body.bath_num;
      apt.brut_m2 = req.body.brut_m2;
      apt.net_m2 = req.body.net_m2;
      apt.block_num = req.body.block_num;
      apt.apart_num = req.body.apart_num;
      apt.floors_num = req.body.floors_num;
      apt.adress = req.body.adress;
      apt.desc = req.body.desc;
      apt.project_status = req.body.project_status;
      apt.location_url = req.body.location_url;
      apt.otopark_check = !req.body.otopark_check ? false : true;
      apt.locat_check = !req.body.locat_check ? false : true;
      apt.transfer_check = !req.body.transfer_check ? false : true;

      val.forEach((element) => {
        apt.images.push(element);
      });

      apt.save();
      req.flash("success_message", [{ msg: "Daire Eklendi" }]);
      res.redirect("/yonetim/projeler");
    } catch (f) {
      console.log(f);
    }
  }
};

const getUpdateApart = async (req, res, next) => {
  try {
    if (req.params.id) {
      const result = await Apart.findById(req.params.id);
      //console.log(result);
      res.render("./admin/ad_apartUpdate", {
        layout: "./admin/layouts/admin_layouts.ejs",
        apart: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const postUpdateApart = async (req, res, next) => {
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());

    res.redirect("/yonetim/projeler/daire-guncelle/" + req.body.id);
  } else {
    try {
      const options = {
        project_name: req.body.project_name,
        project_status: req.body.project_status,
        bath_num: req.body.bath_num,
        room_num: req.body.room_num,
        brut_m2: req.body.brut_m2,
        net_m2: req.body.net_m2,
        block_num: req.body.block_num,
        apart_num: req.body.apart_num,
        floors_num: req.body.floors_num,
        adress: req.body.adress,
        desc: req.body.desc,
        location_url: req.body.location_url,
        otopark_check: !req.body.otopark_check ? false : true,
        locat_check: !req.body.locat_check ? false : true,
        transfer_check: !req.body.transfer_check ? false : true,
      };

      const result = await Apart.findByIdAndUpdate(req.body.id, options);
      if (result) {
        req.flash("success_message", [{ msg: "Daire Güncellendi" }]);

        res.redirect("/yonetim/projeler");
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const postDeleteApart = async (req, res, next) => {
  if (req.params) {
    const result = await Apart.findById(req.params.id);

    if (result) {
      for (let index = 0; index < result.images.length; index++) {
        var check = await deleteFile(result.images[index].id);
      }

      if (check == 204) {
        await Apart.findByIdAndRemove(req.params.id);
        req.flash("success_message", [{ msg: "Daire Silindi" }]);

        res.redirect("/yonetim/projeler");
      } else {
        req.flash("error", ["Bi hata oluştu. Lütfen tekrar deneyiniz."]);
      }
    }
  }
};

const getNews = async (req, res, next) => {
  const result = await News.find({});
  res.render("./admin/ad_news", {
    layout: "./admin/layouts/admin_layouts.ejs",
    news: result,
  });
};

const getAddNews = (req, res, next) => {
  res.render("./admin/ad_newsDetail", {
    layout: "./admin/layouts/admin_layouts.ejs",
  });
};

const postAddNews = async (req, res, next) => {
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("news_name", req.body.news_name);
    req.flash("news_desc", req.body.news_desc);
    req.flash("news_url", req.body.news_url);

    res.redirect("/yonetim/haberler/haber-ekle");
  } else {
    var val = [];

    try {
      if (req.files[0] != undefined && req.body.news_url != "") {
        req.flash("error", [
          "Aynı anda hem resim hem de video yükleyemezsiniz.",
        ]);
        res.redirect("/yonetim/haberler/haber-ekle");
      } else {
        const { body, files } = req;

        for (let f = 0; f < files.length; f++) {
          await uploadFile(files[f]);
          if (data) {
            val.push(data);
          }
        }

        var news = new News();
        news.news_name = req.body.news_name;
        news.news_desc = req.body.news_desc;
        news.news_url = req.body.news_url;

        val.forEach((element) => {
          news.images.push(element);
        });

        news.save();
        req.flash("success_message", [{ msg: "Haber Eklendi" }]);
        res.redirect("/yonetim/haberler");
      }
    } catch (f) {
      console.log(f);
    }
  }
};

const getUpdateNews = async (req, res, next) => {
  try {
    if (req.params.id) {
      const result = await News.findById(req.params.id);
      //console.log(result);
      res.render("./admin/ad_newsUpdate", {
        layout: "./admin/layouts/admin_layouts.ejs",
        news: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const postUpdateNews = async (req, res, next) => {

  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());

    res.redirect("/yonetim/haberler/haber-guncelle/" + req.body.id);
  } else {
    try {
      const options = {
        news_name: req.body.news_name,
        news_desc: req.body.news_desc,
        news_url: req.body.news_url,
      };

      const result = await News.findByIdAndUpdate(req.body.id, options);
      if (result) {
        req.flash("success_message", [{ msg: "Haber Güncellendi" }]);
        res.redirect("/yonetim/haberler");
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const postDeleteNews = async (req, res, next) => {
  if (req.params) {
    const result = await News.findById(req.params.id);

    if (result) {
      if (result.images[0] != undefined && result.news_url == "") {
        for (let index = 0; index < result.images.length; index++) {
          var check = await deleteFile(result.images[index].id);
        }

        if (check == 204) {
          await News.findByIdAndRemove(req.params.id);
          req.flash("success_message", [{ msg: "Daire Silindi" }]);

          res.redirect("/yonetim/haberler");
        }
      } else {
        await News.findByIdAndRemove(req.params.id);
        req.flash("success_message", [{ msg: "Daire Silindi" }]);

        res.redirect("/yonetim/haberler");
      }
    } else {
      req.flash("error", ["Bi hata oluştu. Lütfen tekrar deneyiniz."]);
    }
  }
};

module.exports = {
  getHomePage,
  getAllProjects,
  getAddApart,
  postAddApart,
  getUpdateApart,
  postUpdateApart,
  postDeleteApart,
  getNews,
  getAddNews,
  postAddNews,
  getUpdateNews,
  postUpdateNews,
  postDeleteNews,
};
