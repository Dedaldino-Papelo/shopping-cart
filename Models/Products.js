const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    }

});

const Product = mongoose.model('Product', productSchema);
module.exports = Product