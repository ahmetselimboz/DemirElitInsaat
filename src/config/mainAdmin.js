const User = require("../model/_userModel");
const bcrypt = require("bcryptjs");

async function mainAdmin() {
  const findUser = await User.find({ mainAdmin: true });

  if (!findUser[0]) {
    
    const newUser = new User({
      user_name: "Admin",
      mainAdmin: true,
      password: await bcrypt.hash("123456", 10),
    });

    await newUser.save();
  }
}

mainAdmin()