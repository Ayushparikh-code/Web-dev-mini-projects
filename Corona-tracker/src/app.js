const express = require('express');
const app=express();
const path = require('path');
const hbs = require('hbs');
const port=process.env.PORT||1338;
// public path
const pubPath=path.join(__dirname,"../views");
app.use(express.static(pubPath));
// const partPath
const partPath=path.join(__dirname,"../views/partials");
hbs.registerPartials(partPath);

app.set('view engine','hbs')


app.get("",(req,res)=>{
    res.render('index')
})
app.get("/india",(req,res)=>{
    res.render('index')
})
app.get("/world",(req,res)=>{
    res.render('world')
})
app.get("/testing",(req,res)=>{
    res.render('testing')
})
app.get("/vaccination",(req,res)=>{
    res.render('vaccination')
})
app.get("/hospitals",(req,res)=>{
    res.render('hospitals')
})
app.get("/news",(req,res)=>{
    res.render('news')
})
app.get("/motivation",(req,res)=>{
    res.render('motivation')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/contact",(req,res)=>{
    res.render('contact')
})
app.get("*",(req,res)=>{
    res.render('404error')
})

app.listen(port,()=>{
    console.log(`${port} listening: Run local host in your browser`);
})