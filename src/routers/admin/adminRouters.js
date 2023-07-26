const router = require('express').Router();
const adminController = require("../../controllers/admin/adminController")
const validations = require('../../middleware/validation');
// const isAuthenticated = require("../../middlewares/isAuthanticated");
const multer = require("multer");
const upload = multer();

router.get('/', adminController.getHomePage);
router.get('/anapanel', adminController.getHomePage);
router.get('/daire-sec/:id', adminController.getChooseApart)
router.post("/neden",validations.validateWhy(), adminController.postWhy)
router.post("/istatistik", validations.validateStatistics(), adminController.postStatistics)
router.post("/proje", validations.validateAlt(), adminController.postProject)
router.post("/haber", validations.validateAlt(), adminController.postNews)






router.get('/projeler', adminController.getAllProjects);
router.get('/projeler/daire-ekle', adminController.getAddApart);
router.post('/projeler/daire-ekle',upload.any(),validations.validateApart(), adminController.postAddApart);

router.get("/projeler/daire-guncelle/:id",  adminController.getUpdateApart)
router.post("/projeler/daire-guncelle",validations.validateApart(), adminController.postUpdateApart)

router.get("/projeler/daire-sil/:id", adminController.postDeleteApart);

router.get("/haberler", adminController.getNews);

router.get('/haberler/haber-ekle', adminController.getAddNews);
router.post('/haberler/haber-ekle',upload.any(),validations.validateNews(), adminController.postAddNews);

router.get('/haberler/haber-guncelle/:id', adminController.getUpdateNews);
router.post('/haberler/haber-guncelle',validations.validateNews(), adminController.postUpdateNews);

router.get("/haberler/haber-sil/:id", adminController.postDeleteNews);

router.get("/iletisim-bilgileri", adminController.getContactInfo);
router.post("/iletisim-bilgileri",validations.validateContact(), adminController.postContactInfo);

router.get("/mesajlar", adminController.getMessages)
router.get("/mesajlar/mesaj-detay/:id", adminController.getMessagesDetail)
router.get("/mesajlar/mesaj-sil/:id", adminController.getDeleteMessages)

router.get("/ekibimiz", adminController.getTeam);
router.get("/ekibimiz/baskan/:id", adminController.getPresident);
router.post("/ekibimiz/baskan",upload.any(),validations.validateTeam(), adminController.postPresident);

router.get("/ekibimiz/aciklama", adminController.getTeamDesc)
router.post("/ekibimiz/aciklama", validations.validateDesc(), adminController.postTeamDesc)

router.get("/ekibimiz/ekip-ekle", adminController.getAddTeam);
router.post("/ekibimiz/ekip-ekle",upload.any(),validations.validateTeam(), adminController.postAddTeam);
router.get("/ekibimiz/ekip-guncelle/:id", adminController.getUpdateTeam);
router.post("/ekibimiz/ekip-guncelle",validations.validateTeam(), adminController.postUpdateTeam);

router.get("/ekibimiz/ekip-sil/:id", adminController.getDeleteTeam);

router.get("/degerlerimiz", adminController.getOurValue);
router.get("/degerlerimiz/deger-ekle", adminController.getAddOurValue);
router.post("/degerlerimiz/deger-ekle", validations.validateOurValue() ,adminController.postAddOurValue);


router.get("/degerlerimiz/deger-guncelle/:id",adminController.getUpdateOurValue);
router.post("/degerlerimiz/deger-guncelle",validations.validateOurValue() , adminController.postUpdateOurValue);

router.get("/degerlerimiz/deger-sil/:id",adminController.getDeleteOurValue);


router.get("/vizyon-misyon", adminController.getVisMis)
router.post("/vizyon-misyon",validations.validateVisMis() , adminController.postVisMis)

router.get("/hakkimizda", adminController.getAbout)
router.post("/hakkimizda",validations.validateAbout() , adminController.postAbout)




module.exports = router;