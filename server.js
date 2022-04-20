const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const morgan = require("morgan")
const app = express()

//product schema
const productController = require('./controllers/products')

//dotenv usage
//MUST BE BEFORE PORT DECLARATION
require("dotenv").config()

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`server listening on ${PORT}`))


//connect mongoose to DB via link in .env
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
})

//mongoose connection status
const db = mongoose.connection
db.on("error", (err) => console.log(`mongo error! ${err.message}`))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

//middleware
app.use(morgan('tiny'));
//body parser middleware, gives us access to req.body
app.use(express.urlencoded({extended:true}))
//methodoverride, enables update and edit routes
app.use(methodOverride("_method"))
//enables use of static folder for app.js and style.css
app.use("/static", express.static("public"));
//product schema middleware?

//MUST COME LAST AFTER OTHER MIDDLEWARE
app.use('/products', productController)
