const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    product_price:{
        type:Number,
        required: true,
    },
    product_information:{
        type:String,
        required: true
    },
    product_image:{
        type:String,
        required: true
    }
});

module.exports = ProductModel = mongoose.model('Product', productSchema);