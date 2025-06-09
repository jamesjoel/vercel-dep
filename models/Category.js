import mongoose from "../db/Conn.js";

const CateSchema = mongoose.Schema({
    title : String,
    
}, {timestamps : true});

const Cate = mongoose.model("category", CateSchema);

export default Cate;
