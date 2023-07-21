const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_CONNECTION_STRING,)
.then(()=> console.log('Veritabanina baglanildi'))
.catch(hata => console.log('Hata cikti: ' + hata));