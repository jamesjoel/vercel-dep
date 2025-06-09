import Pro from '../models/Product.js'

let addPro = async(req, res)=>{
    // let result = await Pro.create(req.body);
    // res.send(result);
    res.send({success:true});
}

let getAllPro = async(req, res)=>{
    // let result = await Pro.find();
    res.send([]);
}
let getProById = async(req, res)=>{
    let result = await Pro.find({_id : req.params.id});
    res.send(result[0]);
}
let updatePro = async(req, res)=>{
    let result = await Pro.updateMany({_id : req.params.id}, req.body);
    res.send(result);
}
let deletePro = async(req, res)=>{
    let result = await Pro.deleteMany({_id : req.params.id});
    res.send(result);
}

export {addPro, getAllPro, getProById, updatePro, deletePro};
