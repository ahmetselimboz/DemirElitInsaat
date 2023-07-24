const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ContactSchema = new Schema(
  {
    facebook_url: {
      type: String,
      trim: true,
    },
  
   instagram_url: {
      type: String,
      trim: true,
    },
    twitter_url: {
      type: String,
      trim: true,
    },
    linkedln_url: {
      type: String,
      trim: true,
    },
    phone1: {
      type: String,
      trim: true,
    },
    phone2: {
      type: String,
      trim: true,
    },
    mail: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    location_link: {
      type: String,
      trim: true,
    },

  },
  { collection: "contact", timestamps: true }
);


// UserSchema.plugin(passportLocalMongoose);

const Contact = mongoose.model("contact", ContactSchema);
module.exports = Contact;
