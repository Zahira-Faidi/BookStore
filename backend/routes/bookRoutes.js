const express=require("express")
const router=express.Router()
const catalController=require("../controllers/catalogue.controller")
router.route("/").get(catalController.getBooks).post(catalController.addBook)
router.route("/:id").get(catalController.getBook).put(catalController.updateBook).delete(catalController.deleteBook)
module.exports=router