const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OurValueSchema = new Schema(
  {
    our_title: {
      type: String,
      trim: true,
    },

    our_text: {
      type: String,
      trim: true,
    },
  },
  { collection: "ourvalue", timestamps: true }
);

// UserSchema.plugin(passportLocalMongoose);

const OurValue = mongoose.model("ourvalue", OurValueSchema);
module.exports = OurValue;
