const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');
const bodyparser = require('body-parser');

mongoose.connect('mongodb+srv://bhavy:bhavy1225@cluster0.guwjf.mongodb.net/student?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use(bodyparser.urlencoded({extended:true}));
        app.use(express.json());
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("server started...!!!");
        }) 

    }
);
