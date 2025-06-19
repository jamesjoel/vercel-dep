import Pro from '../models/Product.js'
import Category from '../models/Category.js'
import path from 'path'
import {v4 as uuidv4} from 'uuid'

let addPro = async(req, res)=>{
    let file = req.files.image;
    let formdata = req.body;
    let ext = path.extname(file.name);
    let uniquename = uuidv4()+ext;
    
    file.mv(path.resolve()+"/assets/products/"+uniquename, async(err)=>{
        if(err)
            console.log("upload error ", err);
        formdata.image = uniquename;
        let result_pro = await Pro.create(formdata);
        let result = await Pro.find({_id : result_pro._id}).populate({path : "category", select : "_id title"}).exec();
        res.send(result[0]);
    })
}

let getAllPro = async(req, res)=>{
    let result = await Pro.find().populate({path : "category", select : "_id title"}).exec();
    res.send(result);
}
let getAllProByCategoryName = async(req, res)=>{
    let cateName = req.params.name;
    let cateData = await Category.find({title : cateName});
    let result = await Pro.find({category : cateData._id}).populate("category").exec();

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

let deleteAllProduct = async(req, res)=>{
    let result = await Pro.deleteMany();
    res.send(result);
}

export {
        deleteAllProduct,
        addPro, 
        getAllPro, 
        getProById, 
        updatePro, 
        deletePro,
        getAllProByCategoryName
};
