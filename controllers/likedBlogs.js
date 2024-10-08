const Post = require("../models/postModel");
const Like = require("../models/likedModel");

exports.likedBlogs = async (req,res) =>{

    try{
      const {post,user} = req.body;
      
      const likes = new Like({
        post,user
      })

      const savedLike = await likes.save();


      const updatedPost = await Post.findByIdAndUpdate(post,
        { $push: {likes:savedLike._id} }, {new : true}
      ).populate("likes").exec();

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

exports.unlikeBlogs = async (req,res)=>{

  try{

    const {post,like} = req.body;

    const deleteLike = await Like.findOneAndDelete({
      post:post, _id:like
    });

    if (!deleteLike) {
      return res.status(404).json({
        error: "Like not found",
      });
    }

    const updatedPost = await Post.findByIdAndUpdate(post,
      { $pull: {likes:deleteLike._id} } , { new:true }
    );

    res.status(200).json({
      post:updatedPost
    })

  }
  catch(error){
    res.status(500).json({
      error:"Error",
    })
  }

}