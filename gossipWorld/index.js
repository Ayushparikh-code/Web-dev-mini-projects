const express=require("express");
const app=express();
const port=8080;
const path=require('path');
const mongoose = require('mongoose');
const Post=require("./models/chat.js");
const User=require('./models/users');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');
const methodOverride=require("method-override");
var jwt = require('jsonwebtoken');
require('dotenv').config();
app.use(cookieParser());
main()
    .then (()=>{
        console.log("connection succesful!");
    })
    .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
// const user1=new User({
//     username:"Harika",
//     email:"harika12@gmail.com",
//     password:"harika12"
// });
// user1
//     .save()
//     .then(()=>console.log("user1 saved"))
//     .catch((err)=>console.log(err));



// let chat1=new Post({
//     from: "neha",
//     to:"priya",
//     msg:"Send me your exam sheets",
//     created_at: new Date()
// });
// chat1
//     .save()
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err));

app.get("/",async(req,res)=>{
    let chats=await Post.find();
    res.render("home.ejs",{chats});
})

app.post("/create",async(req,res)=>{
    let { username, email, password } = req.body;
    
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
        console.log(err);
        return res.status(500).send("Salt error");
        }
        bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Hash error");
        }

        try {
           let createdUser= await User.create({
            username: username,
            email: email,
            password: hash 
            });
            const token = jwt.sign({ email }, process.env.JWT_SECRET);
            res.cookie("token", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000 // 1 day
            });
            res.redirect("/"); 
        } catch (err) {
            console.log(err);
            res.status(500).send("User creation failed");
        }
        });
    });
})

app.get("/login",(req,res)=>{
    try{
        const token=req.cookies.token;
        if(!token){
            return res.render("login.ejs");
        }
        return res.redirect("/profile");
    } catch(err){
        console.log(err);
        res.redirect("/");
    }
})

app.get("/logout",(req,res)=>{
    try{
        res.cookie("token","");
        return res.redirect("/");
    } catch(err){
        console.log(err);
        res.redirect("/login");
    }
})

app.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    let person=await User.findOne({email:email});
    if(!person) {
        return res.redirect("/login?error=1");
    }
    bcrypt.compare(password,person.password,async(err,isMatch)=>{
        if (err) {
            console.log(err);
            return res.redirect("/login?error=1");
        }
        if(!isMatch) {
            return res.redirect("/login?error=1");
        }
        try{
            const token = jwt.sign({ email }, process.env.JWT_SECRET);
            res.cookie("token", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000 
            });
            return res.redirect("/profile");
        } catch (err) {
            console.log(err);
            return res.redirect("/");
        }
    })
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/chats",async(req,res)=>{
    try{
        const decoded=jwt.verify(req.cookies.token,process.env.JWT_SECRET);
        const email=decoded.email;
        await Post.create({
            from: email,
            to: req.body.to,
            msg:req.body.msg,
            created_at: new Date()
        });
        let chats=await Post.find({from:email});
        res.redirect("/profile");
    }
    catch(err){
        console.log(err);
        res.redirect("/login");
    }
})

app.get("/profile",isLoggedIn,async(req,res)=>{
    let chats = await Post.find({ from: req.user.email });
    res.render("postlogin.ejs", { chats });
})

app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
})

app.get("/chats/:id/edit",isLoggedIn,async(req,res)=>{
    let {id}=req.params;
    const chat=await Post.findById(id);
    if(chat.from !== req.user.email){
        return res.redirect("/profile");
    }
    res.render("edit.ejs", {chat});
})

app.put("/chats/:id",isLoggedIn,async(req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let chat= await Post.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true,new:true}  
    );
    res.redirect("/profile");
})

app.delete("/chats/:id",isLoggedIn,async(req,res)=>{
    let {id}=req.params;
    await Post.findByIdAndDelete(id);
    res.redirect("/profile");
})

function isLoggedIn(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect("/login");
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    return res.redirect("/login");
  }
}

app.listen({port},()=>{
    console.log(`app is listening to ${port}`);
})