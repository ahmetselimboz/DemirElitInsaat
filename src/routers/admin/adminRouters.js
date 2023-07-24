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

module.exports = router;