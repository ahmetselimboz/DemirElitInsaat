


const getHomePage = async (req, res, next) => {



  res.render("index", {


    layout: false,
  });
};


module.exports = {
  getHomePage,
//   getDetails,
//   postComment,
//   getAllComments,
//   getPage,
//   getImages,
//   postImages,
//   getBookOfDay,
//   postSearch,
};
