const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const NewsSchema = new Schema(
  {
    news_name: {
      type: String,
      trim: true,
    },
    news_desc: {
      type: String,
      trim: true,
    },
    news_url: {
      type: String,
      trim: true,
    },
    images: [
      {
        id: {
          type: String,
        },
        name: {
          type: String,
        },
      },
    ],

  },
  { collection: "news", timestamps: true }
);


// UserSchema.plugin(passportLocalMongoose);

const News = mongoose.model("news", NewsSchema);
module.exports = News;
