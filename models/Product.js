import mongoose from "../db/Conn.js";

const ProSchema = mongoose.Schema({
    title : String,
    price : Number,
    size : String,
    image : String,
    detail : String,
    category : { type : mongoose.Schema.Types.ObjectId, ref : "category"}

}, {timestamps : true});

const Pro = mongoose.model("product", ProSchema);

export default Pro;
