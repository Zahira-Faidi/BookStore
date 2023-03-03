const User=require("../models/User")
const bcrypt=require("bcrypt")
const createUser=async(u)=>{
    const salt=await bcrypt.genSalt()
    u.password=await bcrypt.hash(u.password,salt)
    return await User.create(u)
}
const getAllUsers=async()=>{
    return await User.find()
}

module.exports={
    createUser,
    getAllUsers
}