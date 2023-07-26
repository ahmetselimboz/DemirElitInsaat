const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomePageSchema = new Schema(
  {
    why: {
      alt_metin: {
        type: String,
        trim: true,
      },
      memnuniyet: {
        type: String,
        trim: true,
      },
      uzman_kadro: {
        type: String,
        trim: true,
      },
      guven: {
        type: String,
        trim: true,
      },
      takim_calismasi: {
        type: String,
        trim: true,
      },
      kalite: {
        type: String,
        trim: true,
      },
      aninda_teslim: {
        type: String,
        trim: true,
      },
    },
    static: {
      yillar: {
        type: String,
        trim: true,
      },
      tamam_proje: {
        type: String,
        trim: true,
      },
      devam_proje: {
        type: String,
        trim: true,
      },
      musteri: {
        type: String,
        trim: true,
      },
    },
    projects: {
      alt_metin: {
        type: String,
        trim: true,
      },
    },
    news: {
      alt_metin: {
        type: String,
        trim: true,
      },
    },
  },
  { collection: "homepage", timestamps: true }
);

// UserSchema.plugin(passportLocalMongoose);

const HomePage = mongoose.model("homepage", HomePageSchema);
module.exports = HomePage;
