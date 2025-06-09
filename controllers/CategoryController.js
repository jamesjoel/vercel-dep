import Cate from '../models/Category.js'

let addCate = async(req, res)=>{
    let result = await Cate.create(req.body);
    res.send(result);
    // res.send({success:true});
}

let getAllCate = async(req, res)=>{
    let result = await Cate.find();
    // let result = [
    //     {
    //         _id : 123,
    //         title : "Nackless"
    //     }
    // ]
    res.send(result);
}
let getCateById = async(req, res)=>{
    let result = await Cate.find({_id : req.params.id});
    res.send(result[0]);
}
let updateCate = async(req, res)=>{
    let result = await Cate.updateMany({_id : req.params.id}, req.body);
    res.send(result);
}
let deleteCate = async(req, res)=>{
    let result = await Cate.deleteMany({_id : req.params.id});
    res.send(result);
}

export {addCate, getAllCate, getCateById, updateCate, deleteCate};
