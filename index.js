const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./router/productRouter");


const app = express();
app.use(express.json())

app.use("/api/products",productRouter)

app.use(express.urlencoded({extended : false}))
app.get("/",(req,res)=>{
    res.send("the node api is in initialition process here");
})







mongoose.connect("mongodb://localhost:27017/NodeCrudAPI")
.then(()=>{
    console.log("connected to the database")
    app.listen(3001,()=>{

        console.log("server is running ")
    })
})
.catch(()=>{
    console.log("failed to connect")
})