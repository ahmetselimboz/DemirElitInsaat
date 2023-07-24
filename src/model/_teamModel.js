const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const TeamSchema = new Schema(
  {
    name_surname: {
      type: String,
      trim: true,
    },
    task: {
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
    president: {
      type: Boolean,
      default: false
    },
    
  },
  { collection: "team", timestamps: true }
);


// UserSchema.plugin(passportLocalMongoose);

const Team = mongoose.model("team", TeamSchema);
module.exports = Team;
