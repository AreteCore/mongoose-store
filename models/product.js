const mongoose = require('mongoose')

//this is the actual schema object
//comes from the mongoose.Schema class
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})

//Product is the schema as a model for mongoose
const Product = mongoose.model("Product", productSchema)

module.exports = Product
