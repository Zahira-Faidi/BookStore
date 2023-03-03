const mongoose=require("mongoose")
const express=require("express")
const app=express()
const catRoutes=require("./routes/categoryRoutes")
const bookRoutes=require("./routes/bookRoutes")
const userRoutes=require("./routes/userRoutes")
const cors = require("cors");
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())//parser les données json
app.use("/categories",catRoutes)
app.use("/books",bookRoutes)
app.use("/users",userRoutes)
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL).then(result=>
        app.listen(process.env.PORT,()=>console.log("server is running ..."))
    ).catch(error=>console.log(error))
