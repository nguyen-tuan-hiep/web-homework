const mongoose = require("mongoose");
const {Schema} = mongoose;

const phoneSchema = new Schema(
    {
        name: String,
        brand: String,
        price: Number,
        color: String,
        storage: Number,
        display: String,
        camera: String,
        description: String,
        image: String,
    }
    // {
    //   versionKey: false,
    // }
);

module.exports = mongoose.model("products", phoneSchema);
