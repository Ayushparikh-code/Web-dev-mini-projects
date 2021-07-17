const express =  require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();



app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));





mongoose.connect("mongodb://localhost:27017/restaurant",{
    useNewUrlParser:true, useUnifiedTopology: true
}).then(()=>console.log("successfull"))
.catch((err)=>console.log(err));

const visitorSchema= new mongoose.Schema({
    name:String,
    NoofPeople:Number,
    date:Date,
    message:String
});

const visitorModel = new mongoose.model("visitor",visitorSchema);

//let visitor1 = new visitorModel(
    //{
       // name:"jugesh",
        //NoofPeople:6,
        //date:12-03-2020,
       // message:"hii"  
   // }
//);
//visitor1.save();
//const visitor2 = new visitorModel(
   // {
     //   name:"raghav",
      //  NoofPeople:6,
      //  date:12-03-2020,
      //  message:"hello"  
    //}
//);

//visitor2.save();


app.get("/",(req,res)=>{
res.sendFile(__dirname+"/index.html");
});


app.post("/",(req,res)=>{
  const name = req.body.name;
 const people = req.body.people;
  const date = req.body.date;
 const message = req.body.message;
 const visitor3 = new visitorModel(
    {
        name: name,
        NoofPeople:people,
        date:date,
        message:message  
    }
);
visitor3.save();
res.redirect("/");
})




app.listen(3000,(req,res)=>{
    console.log("server running at port 3000");
})

