const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutSchema = new Schema(
  {
    about_text: {
      type: String,
      trim: true,
    },

    about_pres: {
      type: String,
      trim: true,
    },
  },
  { collection: "about", timestamps: true }
);

// UserSchema.plugin(passportLocalMongoose);

const About = mongoose.model("about", AboutSchema);
module.exports = About;
