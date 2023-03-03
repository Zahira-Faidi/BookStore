const express=require("express")
const router=express.Router()
const userContoller=require("../controllers/user.controller")

router.route("/").get(userContoller.getUsers).post(userContoller.addUser)
module.exports=router