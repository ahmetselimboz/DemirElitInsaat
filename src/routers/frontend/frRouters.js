const router = require('express').Router();
const frontController = require("../../controllers/frontend/frControllers")
// const validations = require('../../middlewares/validations');
// const isAuthenticated = require("../../middlewares/isAuthanticated");
// const multer = require("multer");
// const upload = multer();

router.get('/', frontController.getHomePage);
router.get('/anasayfa', frontController.getHomePage);

router.get('/dairedetay', frontController.getApartDetail)
router.get('/hakkimizda', frontController.getAboutUs)
router.get('/iletisim', frontController.getContact)
router.get('/daireler', frontController.getAparts)
router.get('/haberdetay', frontController.getNewsDetail)
router.get('/haberler', frontController.getNews)
router.get('/degerlerimiz', frontController.getOurValues)
router.get('/ekibimiz', frontController.getSquad)
router.get('/vizyon-misyon', frontController.getVisionMision)



module.exports = router;