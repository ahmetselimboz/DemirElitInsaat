const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MessageSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  
   surname: {
      type: String,
      trim: true,
    },

   title: {
      type: String,
      trim: true,
    },

    phone_num: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    read: {
      type: Boolean,
      trim: true,
      default:false
    },
   

  },
  { collection: "message", timestamps: true }
);


// UserSchema.plugin(passportLocalMongoose);

const Message = mongoose.model("message", MessageSchema);
module.exports = Message;
