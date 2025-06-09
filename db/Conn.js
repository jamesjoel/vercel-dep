import mongoose from "mongoose";

mongoose
.connect(process.env.DB_URL)
.then(()=>{
    console.log("DATABASE CONNECTED")
})
.catch(err=>{
    console.log("----- DB-NOT CONNECTED -----", err)
})

export default mongoose;


// user : contactshinypearls
// pass : 0R3Jb4AJZCCyshqL