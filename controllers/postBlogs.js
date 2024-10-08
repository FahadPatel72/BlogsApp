const Post = require("../models/postModel");
const { post } = require("../routes/blogs");

exports.postBlogs = async(req,res) =>{

    try{
    const{title,body} = req.body;

    const updatedPost = await Post.create({ title,body });

    res.status(200).json({
      post:updatedPost,
    })

    }

    catch(error){

        return res.status(500).json({
            error:"Error",
        })
    }
}

exports.getBlogs = async (req,res) =>{

    try{
      
        const posts = await Post.find().populate("likes").populate("comments").exec();

        res.status(200).json({
            posts
        })

    }

    catch(error){
        return res.status(500).json({
            error:"Error"
        })
    }

}
