const router = require('express').Router();
const frontController = require("../../controllers/frontend/frControllers")
const validations = require('../../middleware/validation');
// const isAuthenticated = require("../../middlewares/isAuthanticated");
// const multer = require("multer");
// const upload = multer();
const isauth = require('../../middleware/isAuth')  

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

router.get("/giris",isauth.no, frontController.getLogin);
router.post("/giris", validations.validatelogin(), frontController.postLogin);

router.get("/kayit",isauth.yes, frontController.getRegister);
router.post("/kayit", validations.validatelogin(), frontController.postRegister);





module.exports = router;