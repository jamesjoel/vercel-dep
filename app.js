const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus odit beatae fuga obcaecati, nostrum distinctio mollitia enim, accusamus unde ullam odio perferendis temporibus velit maxime iste nemo sapiente consectetur!")
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})

