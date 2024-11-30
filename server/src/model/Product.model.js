const mongoose = require('mongoose');

//define product schema
const ProductSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: true
        },
        Price: {
            type: Number,
            required: true
        },
        Description: {
            type: String,
            required: true,
        },
        Category: {
            type: String,
            required: true,
        },
        Image: {
            type: String,
            required: true,
        },
        Sold: {
            type: Boolean,
        },
        IsSale: {
            type: Boolean,
        },
        DateOfSale: {
            type: Date
        }
    }
)
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;