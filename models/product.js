const mongoose = require('mongoose')

//this is the actual schema object
//comes from the mongoose.Schema class
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: String || "http://placeholder.img",
    price: { type: Number, required: true },
    qty: { type: Number, required: true }
})

//Product is the schema as a model for mongoose
const Product = mongoose.model("Product", productSchema)
//export
module.exports = Product
