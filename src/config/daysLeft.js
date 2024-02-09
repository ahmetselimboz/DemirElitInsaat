const leftday = (lastDays) => {
  var bugun = new Date();

  // Tarihi istediğiniz formata dönüştürme
  var gun = bugun.getDate();
  var ay = bugun.getMonth() + 1; // JavaScript'te ay 0 ile başlar, bu yüzden +1 ekliyoruz
  var yil = bugun.getFullYear();

  // İstediğiniz formata göre tarihi birleştirme
  var bugununTarihi =
    yil + "-" + (ay < 10 ? "0" : "") + ay + "-" + (gun < 10 ? "0" : "") + gun;

  var tarihString = bugununTarihi;
  // İkinci tarih stringi
  var digerTarihString = lastDays;

  // Date objelerine dönüştür
  var tarih = new Date(tarihString);
  var digerTarih = new Date(digerTarihString);

  // Milisaniye cinsinden farkı hesapla
  var fark = digerTarih.getTime() -  tarih.getTime() ;

  // Farkı istediğiniz birimlere dönüştürme
  var farkGun = fark / (1000 * 60 * 60 * 24) ; // milisaniyeyi güne çevirir
  
  return farkGun;
};

module.exports = leftday;
