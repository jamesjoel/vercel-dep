import mongoose from "mongoose";

mongoose
.connect("mongodb+srv://contactshinypearls:0R3Jb4AJZCCyshqL@cluster0.fsztvcl.mongodb.net/")
.then(()=>{
    console.log("DATABASE CONNECTED")
})
.catch(err=>{
    console.log("----- DB-NOT CONNECTED -----", err)
})

export default mongoose;


// user : contactshinypearls
// pass : 0R3Jb4AJZCCyshqL