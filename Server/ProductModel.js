const mongoose = require("mongoose");
const { stringify } = require("querystring");

const productSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
},  
    description: {
    type: String,
    required: true,
},
    price: {
    type: Number,
    required: true,
},
    imgUrl: {
    type: String,
    required: true,
}
}, {
    timestamps: true,

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
