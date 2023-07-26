const Apart = require("../../model/_apartModel");
const { uploadFile, deleteFile } = require("../../config/multer_config");
const { validationResult } = require("express-validator");
const News = require("../../model/_newsModel");
const Contact = require("../../model/_contactModel");
const Message = require("../../model/_messageModel");
const Team = require("../../model/_teamModel");
const OurValue = require("../../model/_ourvalueModel");
const VisMis = require("../../model/_vismisModel");
const About = require("../../model/_aboutModel");

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
      } else if (req.files[0] == undefined && req.body.news_url == "") {
        req.flash("error", [
          "Resim veya video alanlarından birini doldurmalısınız.",
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
      if (req.body.images != undefined && req.body.news_url != "") {
        req.flash("error", [
          "Aynı anda hem resim hem de video yükleyemezsiniz.",
        ]);
        res.redirect("/yonetim/haberler/haber-guncelle/" + req.body.id);
      } else if (req.body.images == undefined && req.body.news_url == "") {
        req.flash("error", [
          "Resim veya video alanlarından birini doldurmalısınız.",
        ]);
        res.redirect("/yonetim/haberler/haber-guncelle/" + req.body.id);
      } else {
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

const getContactInfo = async (req, res, next) => {
  const result = await Contact.findOne({});
  if (result) {
    res.render("./admin/ad_contact", {
      layout: "./admin/layouts/admin_layouts.ejs",
      contact: result,
    });
  } else {
    const tui = new Contact({
      facebook_url: "",
      instagram_url: "",
      twitter_url: "",
      linkedln_url: "",
      phone1: "",
      phone2: "",
      mail: "",
      location: "",
      location_link: "",
    });
    tui.save();

    res.redirect("/yonetim/iletisim-bilgileri");
  }
};

const postContactInfo = async (req, res, next) => {
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("facebook_url", req.body.facebook_url);
    req.flash("instagram_url", req.body.instagram_url);
    req.flash("twitter_url", req.body.twitter_url);
    req.flash("linkedln_url", req.body.linkedln_url);
    req.flash("phone1", req.body.phone1);
    req.flash("phone2", req.body.phone2);
    req.flash("mail", req.body.mail);
    req.flash("location", req.body.location);
    req.flash("location_link", req.body.location_link);

    res.redirect("/yonetim/iletisim-bilgileri");
  } else {
    try {
      if (req.body) {
        const result = await Contact.findOne();

        if (result) {
          const options = {
            facebook_url: req.body.facebook_url,
            instagram_url: req.body.instagram_url,
            twitter_url: req.body.twitter_url,
            linkedln_url: req.body.linkedln_url,
            phone1: req.body.phone1,
            phone2: req.body.phone2,
            mail: req.body.mail,
            location: req.body.location,
            location_link: req.body.location_link,
          };

          await Contact.findOneAndUpdate({}, options);
          req.flash("success_message", [
            { msg: "İletişim bilgileri güncellendi" },
          ]);
          res.redirect("/yonetim/iletisim-bilgileri");
        } else {
          const contact = new Contact({
            facebook_url: req.body.facebook_url,
            instagram_url: req.body.instagram_url,
            twitter_url: req.body.twitter_url,
            linkedln_url: req.body.linkedln_url,
            phone1: req.body.phone1,
            phone2: req.body.phone2,
            mail: req.body.mail,
            location: req.body.location,
            location_link: req.body.location_link,
          });
          contact.save();
          req.flash("success_message", [
            { msg: "İletişim bilgileri güncellendi" },
          ]);
          res.redirect("/yonetim/iletisim-bilgileri");
        }
      }
    } catch (f) {
      console.log(f);
    }
  }
};

const getMessages = async (req, res, next) => {
  const result = await Message.find({});
  res.render("./admin/ad_messages", {
    layout: "./admin/layouts/admin_layouts.ejs",
    message: result,
  });
};

const getMessagesDetail = async (req, res, next) => {
  try {
    if (req.params.id) {
      const result = await Message.findByIdAndUpdate(req.params.id, {
        read: true,
      });
      res.render("./admin/ad_messageDetail", {
        layout: "./admin/layouts/admin_layouts.ejs",
        message: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getDeleteMessages = async (req, res, next) => {
  try {
    if (req.params.id) {
      const result = await Message.findByIdAndDelete(req.params.id);
      if (result) {
        req.flash("success_message", [{ msg: "Mesaj silindi" }]);
        res.redirect("/yonetim/mesajlar");
      }
    }
  } catch (error) {}
};

const getTeam = async (req, res, next) => {
  var pres;
  var desc;
  var ekip;

  pres = await Team.find({ president: true });
  desc = await Team.findOne({ team_desc_check: true });
  ekip = await Team.find({ team_desc_check: false, president: false });
  if (pres == "") {
    var team = new Team();
    var val = { _id: null };
    team.name_surname = "ornek";
    team.task = "ornek";
    team.president = true;
    team.images.push(val);
    team.save();
  }

  if (desc == null) {
    var team = new Team();

    team.team_desc = "ornek";

    team.team_desc_check = true;

    team.save();
  }
  pres = await Team.find({ president: true });
  desc = await Team.findOne({ team_desc_check: true });
  ekip = await Team.find({ team_desc_check: false, president: false });

  if (true) {
    res.render("./admin/ad_team", {
      layout: "./admin/layouts/admin_layouts.ejs",
      pres: pres,
      desc: desc,
      ekip: ekip,
    });
  }
};

const getPresident = async (req, res, next) => {
  const result = await Team.findById(req.params.id);
  res.render("./admin/ad_getPresident", {
    layout: "./admin/layouts/admin_layouts.ejs",
    result: result,
  });
};
const postPresident = async (req, res, next) => {
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("name_surname", req.body.name_surname);
    req.flash("task", req.body.task);

    res.redirect("/yonetim/ekibimiz/baskan/" + req.body.id);
  } else if (req.files == "") {
    req.flash("error", ["Resim yüklemeyi unutmayınız"]);
    res.redirect("/yonetim/ekibimiz/baskan/" + req.body.id);
  } else {
    var val = [];

    try {
      const { body, files } = req;

      const find = await Team.find({ president: true });
      if (find) {
        var num = find[0].images.length;

        for (let index = 0; index < num; index++) {
          if (
            find[0].images[index].fotoId != "1EosE3ruftFRRTy4PZlUTgUHhY8wOuN6s"
          )
            await deleteFile(find[0].images[index].fotoId);
        }

        if (true) {
          await Team.findOneAndRemove({ president: true });
        }
      }

      const findd = await Team.find({ president: true });
      if (findd) {
        for (let f = 0; f < files.length; f++) {
          await uploadFile(files[f]);
          if (data) {
            var deger = {
              fotoId: data.id,
              name: data.name,
            };
            val.push(deger);
          }
        }
        var team = new Team();

        team.name_surname = req.body.name_surname;
        team.task = req.body.task;
        team.president = req.body.president;
        val.forEach((element) => {
          team.images.push(element);
        });

        team.save();
        req.flash("success_message", [{ msg: "Başkan güncellendi" }]);
        res.redirect("/yonetim/ekibimiz");
      }
    } catch (f) {
      console.log(f);
    }
  }
};

const getTeamDesc = async (req, res, next) => {
  const result = await Team.findOne({ team_desc_check: true });
  res.render("./admin/ad_teamDesc", {
    layout: "./admin/layouts/admin_layouts.ejs",
    result: result,
  });
};

const postTeamDesc = async (req, res, next) => {
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("team_desc", req.body.team_desc);

    res.redirect("/yonetim/ekibimiz/aciklama");
  } else {
    try {
      if (req.body) {
        const result = await Team.findOne({ team_desc_check: true });

        if (result) {
          const options = {
            team_desc: req.body.team_desc,
          };

          await Team.findOneAndUpdate({ team_desc_check: true }, options);
          req.flash("success_message", [
            { msg: "Ekip açıklaması güncellendi" },
          ]);
          res.redirect("/yonetim/ekibimiz");
        } else {
          const team = new Team({
            team_desc: req.body.team_desc,
            team_desc_check: req.body.team_desc_check,
          });
          team.save();
          req.flash("success_message", [
            { msg: "Ekip açıklaması güncellendi" },
          ]);
          res.redirect("/yonetim/ekibimiz");
        }
      }
    } catch (f) {
      console.log(f);
    }
  }
};

const getAddTeam = (req, res, next) => {
  res.render("./admin/ad_addTeam", {
    layout: "./admin/layouts/admin_layouts.ejs",
  });
};

const postAddTeam = async (req, res, next) => {
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("name_surname", req.body.name_surname);
    req.flash("task", req.body.task);

    res.redirect("/yonetim/ekibimiz/ekip-ekle");
  } else {
    var val = [];

    try {
      const { body, files } = req;

      for (let f = 0; f < files.length; f++) {
        await uploadFile(files[f]);
        if (data) {
          var deger = {
            fotoId: data.id,
            name: data.name,
          };
          val.push(deger);
        }
      }

      var team = new Team();

      team.name_surname = req.body.name_surname;
      team.task = req.body.task;

      val.forEach((element) => {
        team.images.push(element);
      });

      team.save();
      req.flash("success_message", [{ msg: "Ekip Arkadaşı Eklendi" }]);
      res.redirect("/yonetim/ekibimiz");
    } catch (f) {
      console.log(f);
    }
  }
};

const getUpdateTeam = async (req, res, next) => {
  try {
    if (req.params.id) {
      const result = await Team.findById(req.params.id);
      //console.log(result);
      res.render("./admin/ad_updateTeam", {
        layout: "./admin/layouts/admin_layouts.ejs",
        team: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const postUpdateTeam = async (req, res, next) => {
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());

    res.redirect("/yonetim/ekibimiz/ekip-guncelle/" + req.body.id);
  } else {
    try {
      const options = {
        name_surname: req.body.name_surname,
        task: req.body.task,
      };

      const result = await Team.findByIdAndUpdate(req.body.id, options);
      if (result) {
        req.flash("success_message", [{ msg: "Ekip Güncellendi" }]);

        res.redirect("/yonetim/ekibimiz");
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const getDeleteTeam = async (req, res, next) => {
  if (req.params) {
    const result = await Team.findById(req.params.id);

    if (result) {
      for (let index = 0; index < result.images.length; index++) {
        var check = await deleteFile(result.images[index].fotoId);
      }

      if (check == 204) {
        await Team.findByIdAndRemove(req.params.id);
        req.flash("success_message", [{ msg: "Silindi" }]);

        res.redirect("/yonetim/ekibimiz");
      } else {
        req.flash("error", ["Bi hata oluştu. Lütfen tekrar deneyiniz."]);
      }
    }
  }
};

const getOurValue = async (req, res, next) => {
  const result = await OurValue.find({});
  res.render("./admin/ad_ourvalue", {
    layout: "./admin/layouts/admin_layouts.ejs",
    our: result,
  });
};
const getAddOurValue = (req, res, next) => {
  res.render("./admin/ad_ourvalueAdd", {
    layout: "./admin/layouts/admin_layouts.ejs",
  });
};

const postAddOurValue = async (req, res, next) => {
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("our_title", req.body.our_title);
    req.flash("our_text", req.body.our_text);

    res.redirect("/yonetim/degerlerimiz/deger-ekle");
  } else {
    try {
      var our = new OurValue();
      our.our_title = req.body.our_title;
      our.our_text = req.body.our_text;

      our.save();
      req.flash("success_message", [{ msg: "Eklendi" }]);
      res.redirect("/yonetim/degerlerimiz");
    } catch (f) {
      console.log(f);
    }
  }
};

const getUpdateOurValue = async (req, res, next) => {
  if (req.params) {
    const result = await OurValue.findById(req.params.id);

    res.render("./admin/ad_ourvalueUpdate", {
      layout: "./admin/layouts/admin_layouts.ejs",
      our: result,
    });
  }
};
const postUpdateOurValue = async (req, res, next) => {

  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());

    res.redirect("/yonetim/degerlerimiz/deger-guncelle/" + req.body.id);
  } else {
    try {
      const options = {
        our_title: req.body.our_title,
        our_text: req.body.our_text,
      };

      const result = await OurValue.findByIdAndUpdate(req.body.id, options);
      if (result) {
        req.flash("success_message", [{ msg: "Güncellendi" }]);

        res.redirect("/yonetim/degerlerimiz");
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const getDeleteOurValue = async (req, res, next) => {
  try {
    if (req.params.id) {
      const result = await OurValue.findByIdAndDelete(req.params.id);
      if (result) {
        req.flash("success_message", [{ msg: "Silindi" }]);
        res.redirect("/yonetim/degerlerimiz");
      }
    }
  } catch (error) {}
};

const getVisMis = async (req, res, next) => {
  const result = await VisMis.findOne({});
  if (result) {
    res.render("./admin/ad_vismis", {
      layout: "./admin/layouts/admin_layouts.ejs",
      vismis: result,
    });
  } else {
    const tui = new VisMis({
      vision: "",
      mision: "",
    });
    tui.save();

    res.redirect("/yonetim/vizyon-misyon");
  }
};
const postVisMis = async (req, res, next) => {
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("vision", req.body.facebook_url);
    req.flash("mision", req.body.instagram_url);

    res.redirect("/yonetim/vizyon-misyon");
  } else {
    try {
      if (req.body) {
        const result = await VisMis.findOne();

        if (result) {
          const options = {
            vision: req.body.vision,
            mision: req.body.mision,
          };

          await VisMis.findOneAndUpdate({}, options);
          req.flash("success_message", [{ msg: "Vizyon-Misyon güncellendi" }]);
          res.redirect("/yonetim/vizyon-misyon");
        } else {
          const vismis = new VisMis({
            vision: req.body.vision,
            mision: req.body.mision,
          });
          vismis.save();
          req.flash("success_message", [{ msg: "Vizyon-Misyon güncellendi" }]);
          res.redirect("/yonetim/vizyon-misyon");
        }
      }
    } catch (f) {
      console.log(f);
    }
  }
};

const getAbout = async (req,res,next)=>{
  const result = await About.findOne({});
  if (result) {
    res.render("./admin/ad_about", {
      layout: "./admin/layouts/admin_layouts.ejs",
      about: result,
    });
  } else {
    const tui = new About({
      about_text: "",
      about_pres: "",
    });
    tui.save();

    res.redirect("/yonetim/hakkimizda");
  }
}

const postAbout = async (req,res,next)=>{
  const hatalar = validationResult(req);

  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("about_text", req.body.facebook_url);
    req.flash("about_pres", req.body.instagram_url);

    res.redirect("/yonetim/hakkimizda");
  } else {
    try {
      if (req.body) {
        const result = await About.findOne();

        if (result) {
          const options = {
            about_text: req.body.about_text,
            about_pres: req.body.about_pres,
          };

          await About.findOneAndUpdate({}, options);
          req.flash("success_message", [{ msg: "Hakkkımızda güncellendi" }]);
          res.redirect("/yonetim/hakkimizda");
        } else {
          const about = new About({
            about_text: req.body.about_text,
            about_pres: req.body.about_pres,
          });
          about.save();
          req.flash("success_message", [{ msg: "Hakkkımızda güncellendi" }]);
          res.redirect("/yonetim/hakkimizda");
        }
      }
    } catch (f) {
      console.log(f);
    }
  }
}

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
  getContactInfo,
  postContactInfo,
  getMessages,
  getMessagesDetail,
  getDeleteMessages,
  getTeam,
  getPresident,
  postPresident,
  getTeamDesc,
  postTeamDesc,
  getAddTeam,
  postAddTeam,
  getUpdateTeam,
  postUpdateTeam,
  getDeleteTeam,
  getOurValue,
  postAddOurValue,
  getAddOurValue,
  getUpdateOurValue,
  postUpdateOurValue,
  getDeleteOurValue,
  getVisMis,
  postVisMis,
  getAbout,
  postAbout
};
