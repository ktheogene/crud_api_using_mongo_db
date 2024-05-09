const mongoose = require("mongoose")


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "product name is required"],
        default: 0
    },
    email: {
        type: String,
        required: true,
        default: 0
    },
    password: {
        type: String,
        required: true,
        default: 0
    }
},
    {
        timestamps: true
    })


const Product = mongoose.model("Product", productSchema);
module.exports = Product