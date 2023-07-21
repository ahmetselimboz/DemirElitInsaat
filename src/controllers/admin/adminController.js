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

const getApart = async (req, res, next) => {
    res.render("./admin/ad_apartDetail", {
      layout: "./admin/layouts/admin_layouts.ejs",

    
    });
  };
  




module.exports = {
    getHomePage,
    getAllProjects,
    getApart

  };