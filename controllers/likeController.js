

const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
    try{
        const {post, user} = req.body;

        const response = await Like.create({post, user});

        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes : response._id}}, {new : true})
                    .populate("likes")
                    .exec()

        res.status(200).json({
            success : true,
            post : updatedPost
        })

    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success : false,
            data : "Internal Error",
            essage : error.message
        })
    }
}


exports.unlikePost = async (req, res) =>{
    try{
        const {post, like} = req.body;

        //Find and Delete from liked collection
        // const deletedLike = await Like.findOneAndDelete({post : post, _id : like});
        //Another Method
        const deletedLike = await Like.findOneAndDelete({post : post, _id:like});

        //Update the Post Collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull : {likes : deletedLike._id}}, {new : true});

        res.status(200).json({
            success : true,
            post : updatedPost
        })



    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success : false,
            data : "Internal Error",
            essage : error.message
        })
    }
}