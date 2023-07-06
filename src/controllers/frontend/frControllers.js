


const getHomePage = async (req, res, next) => {



  res.render("index", {


    layout: false,
  });
};

const getApartDetail = async (req, res, next) => {



  res.render("apart_detail", {


    layout: false,
  });
};


module.exports = {
  getHomePage,
  getApartDetail,
//   getDetails,
//   postComment,
//   getAllComments,
//   getPage,
//   getImages,
//   postImages,
//   getBookOfDay,
//   postSearch,
};
