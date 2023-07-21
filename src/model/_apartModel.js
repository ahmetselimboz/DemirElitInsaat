const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  fotoId: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    default: "defaultUser.png",
  },
});

const ApartSchema = new Schema(
  {
    project_name: {
      type: String,
      trim: true,
    },
    room_num: {
      type: String,
      trim: true,
    },
    brut_m2: {
      type: String,
      trim: true,
    },
    net_m2: {
      type: String,
      trim: true,
    },
    block_num: {
      type: String,
      trim: true,
    },
    floors_num: {
      type: String,
      trim: true,
    },
    adress: {
      type: String,
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    images: {
      type: [ImageSchema],
      trim: true,
    },
 
  },
  { collection: "apart", timestamps: true }
);

// UserSchema.plugin(passportLocalMongoose);

const Apart = mongoose.model("apart", ApartSchema);
module.exports = Apart;
