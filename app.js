import express from 'express';
import cors from 'cors'
import path from 'path';
import AllRoutes from './routes/AllRoutes.js'
import upload from 'express-fileupload'
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended : true }));
app.use(cors());
app.use(upload());
app.use(express.static(path.resolve()+"/assets"));

const root = path.join(path.resolve(), "dist");
app.use(express.static(root));

app.use(AllRoutes);

app.get(/(.*)/, (req, res)=>{
    res.sendFile("index.html", {root});
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})
// changes

