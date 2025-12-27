const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    from: {
        type:String,
        required:true
    },
    to: {
        type: String,
        required:true
    },
    msg:{
        type: String,
    },
    created_at: {
        type:Date,
        required:true
    }
});
const Post=mongoose.model("Post",postSchema);
module.exports=Post;