const express = require('express')

//variable of the .Router() method
//dont forget to module.exports at the bottom to this var
const productRouter = express.Router()

//require mongoose product schema
const Product = require("../models/product")
const seed = require("../models/productseed")

//seed data if you have it
const seed = require("./models/seedfile")

// INDUCES - Index, New, Delete, Update, Create, Edit, Show
//seed if you have it
productRouter.get("/seed", (req, res) => {
    Product.deleteMany({}, (error, allProducts) => {
      Product.create(
        seed,
        (error, data) => {
            res.send(data)
        //   res.redirect("/products")
        }
      )
    })
  })

//create route

//delete route

//new route

//index route


//show route

//export
module.exports = productRouter