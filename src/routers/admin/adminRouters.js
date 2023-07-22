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

router.get("/projeler/daire-guncelle/:id",  adminController.getUpdateApart)
router.post("/projeler/daire-guncelle",validations.validateApart(), adminController.postUpdateApart)

router.get("/projeler/daire-sil/:id", adminController.postDeleteApart);






module.exports = router;