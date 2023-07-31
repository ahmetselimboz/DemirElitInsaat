const router = require('express').Router();
const adminController = require("../../controllers/admin/adminController")
const validations = require('../../middleware/validation');
// const isAuthenticated = require("../../middlewares/isAuthanticated");
const multer = require("multer");
const upload = multer();
const isauth = require('../../middleware/isAuth')  


router.get('/',isauth.yes, adminController.getHomePage);
router.get('/anapanel',isauth.yes, adminController.getHomePage);
router.get('/daire-sec/:id',isauth.yes, adminController.getChooseApart)
router.post("/neden",validations.validateWhy(), adminController.postWhy)
router.post("/istatistik", validations.validateStatistics(), adminController.postStatistics)
router.post("/proje", validations.validateAlt(), adminController.postProject)
router.post("/haber", validations.validateAlt(), adminController.postNews)

router.get("/sifre-guncelle", adminController.getPass)
router.post("/sifre-guncelle", validations.validatePass(), adminController.postPass)

router.get("/cikis-yap", adminController.getLogOut);



router.get('/projeler',isauth.yes, adminController.getAllProjects);
router.get('/projeler/daire-ekle',isauth.yes, adminController.getAddApart);
router.post('/projeler/daire-ekle',validations.validateApart(), adminController.postAddApart);

router.get("/projeler/daire-guncelle/:id",isauth.yes,  adminController.getUpdateApart)
router.post("/projeler/daire-guncelle",validations.validateApart(), adminController.postUpdateApart)

router.get("/projeler/daire-sil/:id",isauth.yes, adminController.postDeleteApart);

router.get("/haberler",isauth.yes, adminController.getNews);

router.get('/haberler/haber-ekle',isauth.yes, adminController.getAddNews);
router.post('/haberler/haber-ekle',upload.any(),validations.validateNews(), adminController.postAddNews);

router.get('/haberler/haber-guncelle/:id',isauth.yes, adminController.getUpdateNews);
router.post('/haberler/haber-guncelle',validations.validateNews(), adminController.postUpdateNews);

router.get("/haberler/haber-sil/:id",isauth.yes, adminController.postDeleteNews);

router.get("/iletisim-bilgileri",isauth.yes, adminController.getContactInfo);
router.post("/iletisim-bilgileri",validations.validateContact(), adminController.postContactInfo);

router.get("/mesajlar",isauth.yes, adminController.getMessages)
router.get("/mesajlar/mesaj-detay/:id",isauth.yes, adminController.getMessagesDetail)
router.get("/mesajlar/mesaj-sil/:id",isauth.yes, adminController.getDeleteMessages)

router.get("/ekibimiz",isauth.yes, adminController.getTeam);
router.get("/ekibimiz/baskan/:id",isauth.yes, adminController.getPresident);
router.post("/ekibimiz/baskan",upload.any(),validations.validateTeam(), adminController.postPresident);

router.get("/ekibimiz/aciklama",isauth.yes, adminController.getTeamDesc)
router.post("/ekibimiz/aciklama", validations.validateDesc(), adminController.postTeamDesc)

router.get("/ekibimiz/ekip-ekle",isauth.yes, adminController.getAddTeam);
router.post("/ekibimiz/ekip-ekle",upload.any(),validations.validateTeam(), adminController.postAddTeam);
router.get("/ekibimiz/ekip-guncelle/:id",isauth.yes, adminController.getUpdateTeam);
router.post("/ekibimiz/ekip-guncelle",validations.validateTeam(), adminController.postUpdateTeam);

router.get("/ekibimiz/ekip-sil/:id",isauth.yes, adminController.getDeleteTeam);

router.get("/degerlerimiz",isauth.yes, adminController.getOurValue);
router.get("/degerlerimiz/deger-ekle",isauth.yes, adminController.getAddOurValue);
router.post("/degerlerimiz/deger-ekle", validations.validateOurValue() ,adminController.postAddOurValue);


router.get("/degerlerimiz/deger-guncelle/:id",isauth.yes,adminController.getUpdateOurValue);
router.post("/degerlerimiz/deger-guncelle",validations.validateOurValue() , adminController.postUpdateOurValue);

router.get("/degerlerimiz/deger-sil/:id",isauth.yes,adminController.getDeleteOurValue);


router.get("/vizyon-misyon",isauth.yes, adminController.getVisMis)
router.post("/vizyon-misyon",validations.validateVisMis() , adminController.postVisMis)

router.get("/hakkimizda",isauth.yes, adminController.getAbout)
router.post("/hakkimizda",validations.validateAbout() , adminController.postAbout)

router.get("/resim-ekle/:id",isauth.yes, adminController.getAddImage)
router.post("/resim-ekle",upload.any(), adminController.postAddImage)

router.get("/resim-sil/:id",isauth.yes, adminController.getDeleteImage)
router.get("/foto-sil/:proid/:fotoid",isauth.yes, adminController.getPostDeleteImage)


module.exports = router;    