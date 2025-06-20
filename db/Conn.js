import mongoose from "mongoose";

let isConnected;

export const dbConnect = async () => {
  if (isConnected) return;

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  isConnected = db.connections[0].readyState;
};

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