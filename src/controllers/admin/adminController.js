const Apart = require("../../model/_apartModel");
const uploadFile = require("../../config/multer_config");
const { validationResult } = require("express-validator");

const getHomePage = async (req, res, next) => {
  res.render("./admin/ad_index", {
    layout: "./admin/layouts/admin_layouts.ejs",
  });
};
const getAllProjects = async (req, res, next) => {
  res.render("./admin/ad_aparts", {
    layout: "./admin/layouts/admin_layouts.ejs",
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
  

    res.redirect("/yonetim/projeler/daire-ekle");
  } else {
    var val = [];

    try {
      const { body, files } = req;
      console.log(body);
      for (let f = 0; f < 9; f++) {
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
      apt.otopark_check = !req.body.otopark_check ? false : true;
      apt.locat_check = !req.body.locat_check ? false: true;
      apt.transfer_check = !req.body.transfer_check ? false: true;
  
      val.forEach((element) => {
        apt.images.push(element);
      });
  
      apt.save();
      req.flash("success_message", [
        { msg: "Daire Eklendi" },
      ]);
      res.redirect("/yonetim/projeler");
    } catch (f) {
      console.log(f);
    }
  }
 
};

module.exports = {
  getHomePage,
  getAllProjects,
  getAddApart,
  postAddApart,
};
