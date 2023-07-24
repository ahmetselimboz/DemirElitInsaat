const router = require('express').Router();
const frontController = require("../../controllers/frontend/frControllers")
// const validations = require('../../middlewares/validations');
// const isAuthenticated = require("../../middlewares/isAuthanticated");
// const multer = require("multer");
// const upload = multer();

router.get('/', frontController.getHomePage);
router.get('/anasayfa', frontController.getHomePage);

router.get('/daire-detay/:id', frontController.getApartDetail)
router.get('/daireler/:link', frontController.getAparts)

router.get('/haber-detay/:id', frontController.getNewsDetail)
router.get('/haberler', frontController.getNews)

router.get('/hakkimizda', frontController.getAboutUs)
router.get('/degerlerimiz', frontController.getOurValues)
router.get('/ekibimiz', frontController.getSquad)
router.get('/vizyon-misyon', frontController.getVisionMision)

router.get('/iletisim', frontController.getContact)
router.post("/mesaj" , frontController.postMessage);


module.exports = router;