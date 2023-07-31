const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  fotoid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  name: { type: String },
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
    bath_num: {
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
    apart_num: {
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

    project_status:{
      type:String,
      default: 1
    },
    location_url:{
      type: String,
      trim: true
    },
    homepage_view:{
      type: Boolean,
      trim: true,
      default: false
    },
    checkbox:{
      closed_otopark: {
        type: Boolean,
        default: false
      },
      open_otopark: {
        type: Boolean,
        default: false
      },
      school: {
        type: Boolean,
        default: false
      },
      pharmacy: {
        type: Boolean,
        default: false
      },
      clinic: {
        type: Boolean,
        default: false
      },
      mosque: {
        type: Boolean,
        default: false
      },
      bus_station: {
        type: Boolean,
        default: false
      },
      park: {
        type: Boolean,
        default: false
      },
      market: {
        type: Boolean,
        default: false
      },
   
    },
    access:{
      type: String,
      trim: true
    },
  },
  { collection: "apart", timestamps: true }
);


// UserSchema.plugin(passportLocalMongoose);

const Apart = mongoose.model("apart", ApartSchema);
module.exports = Apart;
