const mongoose =  require('mongoose')
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    user_name:{
        type: String,
        required: true,
        trim: true,
   
    },
    password:{
        type: String,
        required: true,
        trim: true
       
    }
}, {collection:'user', timestamps:true});

// UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);
module.exports = User;