const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Relations')

app.use(require('./routs/routs.js'))

app.listen(3000,function(){
    console.log("server on!")
})

