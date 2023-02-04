const express=require("express");
const bodyParser = require("body-parser");
const app=express();
app.set('view engine',"ejs");
app.use(bodyParser.urlencoded({extended:true}))
let newitems=["Wake up","Fresh up","Eat up"];
app.use(express.static("public"));
app.get("/",function(req,res ){
    var today =new Date();
    // var curentday=today.getDay();
    // var day="";
    // if(curentday==6){
    //   day="weekend";
    // }
    // else{
    //     day="weekday";
    // }
//    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     day = weekday[today.getDay()]
     var option={
        weekday:"long",
        day:"numeric",
        month:"long"
     };
     var day=today.toLocaleDateString("en-us",option);
    res.render("list",{kindofday:day, newlistitem:newitems})
})
app.post("/",function(req,res){
    let newitem=req.body.newitem;
    newitems.push(newitem);
    res.redirect("/");
})

app.listen(3000);