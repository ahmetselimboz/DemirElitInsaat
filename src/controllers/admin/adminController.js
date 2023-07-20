const getHomePage = async (req, res, next) => {
    res.render("./admin/ad_index", {
      layout: "./admin/layouts/admin_layouts.ejs",

    
    });
  };
  




module.exports = {
    getHomePage,

  };