const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome")
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})