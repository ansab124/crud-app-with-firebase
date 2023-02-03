const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        product_Name: {
            type: String,
            required: true,
        },
        product_Description: {
            type: String,
            required: true,
        },
        product_Title: {
            type: String,
            required: true,
        },
        product_Quantity: {
            type: Number
        },
        // category: [{ type: mongoose.Shema.Types.ObjectId, ref: 'Product'}]

    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);


module.exports = Product;