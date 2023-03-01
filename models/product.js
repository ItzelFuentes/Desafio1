const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: true
    },
    description: String,
    precio: Number,
    images: String
    });


module.exports = mongoose.model("product", productSchema);
