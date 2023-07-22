const router = require('express').Router();
const adminController = require("../../controllers/admin/adminController")
const validations = require('../../middleware/validation');
// const isAuthenticated = require("../../middlewares/isAuthanticated");
const multer = require("multer");
const upload = multer();

router.get('/', adminController.getHomePage);
router.get('/anapanel', adminController.getHomePage);
router.get('/projeler', adminController.getAllProjects);
router.get('/projeler/daire-ekle', adminController.getAddApart);
router.post('/projeler/daire-ekle',upload.any(),validations.validateApart(), adminController.postAddApart);






module.exports = router;