const { check, body } = require("express-validator");

const validateApart = () => {
  return [
    body("project_name")
      .trim()
      .notEmpty()
      .withMessage("Proje Adı alanını boş geçmeyiniz"),

    body("room_num")
      .trim()
      .notEmpty()
      .withMessage("Oda Sayısı alanını boş geçmeyiniz"),
    body("bath_num")
      .trim()
      .notEmpty()
      .withMessage("Banyo Sayısı alanını boş geçmeyiniz"),
    body("brut_m2")
      .trim()
      .notEmpty()
      .withMessage("Brüt m2 alanını boş geçmeyiniz"),
    body("net_m2")
      .trim()
      .notEmpty()
      .withMessage("Net m2 alanını boş geçmeyiniz"),
    body("block_num")
      .trim()
      .notEmpty()
      .withMessage("Blok Sayısı alanını boş geçmeyiniz"),
    body("apart_num")
      .trim()
      .notEmpty()
      .withMessage("Daire Sayısı alanını boş geçmeyiniz"),
    body("floors_num")
      .trim()
      .notEmpty()
      .withMessage("Kat Sayı alanını boş geçmeyiniz"),
    body("adress")
      .trim()
      .notEmpty()
      .withMessage("Adres alanını boş geçmeyiniz"),
    body("desc")
      .trim()
      .notEmpty()
      .withMessage("Açıklama alanını boş geçmeyiniz"),
    body("location_url")
      .trim()
      .notEmpty()
      .withMessage("Adres Link alanını boş geçmeyiniz"),
  ];
};

const validateNews = () => {
  return [
    body("news_name")
      .trim()
      .notEmpty()
      .withMessage("Haber Adı alanını boş geçmeyiniz"),

    body("news_desc")
      .trim()
      .notEmpty()
      .withMessage("Açıklama alanını boş geçmeyiniz"),
  ];
};
const validateContact = () => {
  return [
    body("facebook_url")
      .trim()
      .notEmpty()
      .withMessage("Facebook Link alanını boş geçmeyiniz"),

    body("instagram_url")
      .trim()
      .notEmpty()
      .withMessage("İnstagram Link alanını boş geçmeyiniz"),
    body("twitter_url")
      .trim()
      .notEmpty()
      .withMessage("Twitter Link alanını boş geçmeyiniz"),
    body("linkedln_url")
      .trim()
      .notEmpty()
      .withMessage("Linkedln Link alanını boş geçmeyiniz"),
    body("phone1")
      .trim()
      .notEmpty()
      .withMessage("Telefon-1 alanını boş geçmeyiniz"),
    body("phone2")
      .trim()
      .notEmpty()
      .withMessage("Telefon-2 alanını boş geçmeyiniz"),
    body("mail")
      .trim()
      .notEmpty()
      .withMessage("Mail alanını boş geçmeyiniz"),
    body("location")
      .trim()
      .notEmpty()
      .withMessage("Konum alanını boş geçmeyiniz"),
    body("location_link")
      .trim()
      .notEmpty()
      .withMessage("Konum Link alanını boş geçmeyiniz"),
  ];
};

const validateTeam = () => {
  return [
    body("name_surname")
      .trim()
      .notEmpty()
      .withMessage("Ad-Soyad alanını boş geçmeyiniz"),

    body("task")
      .trim()
      .notEmpty()
      .withMessage("Görev alanını boş geçmeyiniz"),
  ];
};

const validateDesc = () => {
  return [
    body("team_desc")
      .trim()
      .notEmpty()
      .withMessage("Ekip Açıklaması alanını boş geçmeyiniz"),


  ];
};


module.exports = {
  validateApart,
  validateNews,
  validateContact,
  validateTeam,
  validateDesc
};
