const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`server listening on ${PORT}`))

//dotenv usage
require("dotenv").config()

//connect mongoose to DB via link in .env
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
})

//mongoose connection status
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

//middleware
//body parser middleware, gives us access to req.body
app.use(express.urlencoded({extended:true}))
//methodoverride, enables update and edit routes
app.use(methodOverride("_method")
