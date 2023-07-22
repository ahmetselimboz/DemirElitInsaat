const { body } = require("express-validator");

const validateApart = ()=>{
    return [
        body("project_name").trim().notEmpty().withMessage("Proje Adı alanını boş geçmeyiniz"),
        body("room_num").trim().notEmpty().withMessage("Oda Sayısı alanını boş geçmeyiniz"),
        body("bath_num").trim().notEmpty().withMessage("Banyo Sayısı alanını boş geçmeyiniz"),
        body("brut_m2").trim().notEmpty().withMessage("Brüt m2 alanını boş geçmeyiniz"),
        body("net_m2").trim().notEmpty().withMessage("Net m2 alanını boş geçmeyiniz"),
        body("block_num").trim().notEmpty().withMessage("Blok Sayısı alanını boş geçmeyiniz"),
        body("apart_num").trim().notEmpty().withMessage("Daire Sayısı alanını boş geçmeyiniz"),
        body("floors_num").trim().notEmpty().withMessage("Kat Sayı alanını boş geçmeyiniz"),
        body("adress").trim().notEmpty().withMessage("Adres alanını boş geçmeyiniz"),
        body("desc").trim().notEmpty().withMessage("Açıklama alanını boş geçmeyiniz"),
        body("images").trim().notEmpty().withMessage("Resim alanını boş geçmeyiniz"),
    ]
}

module.exports = {
    validateApart,
  };