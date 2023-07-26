const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const TeamSchema = new Schema(
  {
    name_surname: {
      type: String,
      trim: true,
      default: ""
    },
    task: {
      type: String,
      trim: true,
      default: ""
    },
    
    images: [
      {
        fotoId: {
          type: String,
          default: "1EosE3ruftFRRTy4PZlUTgUHhY8wOuN6s"
        },
        name: {
          type: String,
          default: "Default_Team.png"
        },
      },
    ],
    president: {
      type: Boolean,
      default: false
    },
    team_desc:{
      type: String,
      trim: true,
      default: ""
    },
    team_desc_check:{
      type: String,
      trim: true,
      default: false
    }
    
  },
  { collection: "team", timestamps: true }
);


// UserSchema.plugin(passportLocalMongoose);

const Team = mongoose.model("team", TeamSchema);
module.exports = Team;
