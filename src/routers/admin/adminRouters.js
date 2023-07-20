const router = require('express').Router();
const adminController = require("../../controllers/admin/adminController")
// const validations = require('../../middlewares/validations');
// const isAuthenticated = require("../../middlewares/isAuthanticated");
// const multer = require("multer");
// const upload = multer();

router.get('/', adminController.getHomePage);
router.get('/anapanel', adminController.getHomePage);





module.exports = router;