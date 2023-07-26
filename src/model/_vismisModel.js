const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const VisMisSchema = new Schema(
  {
    vision: {
      type: String,
      trim: true,
    },
  
   mision: {
      type: String,
      trim: true,
    },
   

  },
  { collection: "vision-mision", timestamps: true }
);


// UserSchema.plugin(passportLocalMongoose);

const VisMis = mongoose.model("vision-mision", VisMisSchema);
module.exports = VisMis;
