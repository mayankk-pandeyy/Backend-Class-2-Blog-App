// Import models

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
    try{
        // Fetch data feom req body
        const {post, user, body} = req.body;

        //Create a new comment
        const response = await Comment.create({post, user, body});

        // Find Post by id and add the new comment to the array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comments : response._id}}, {new : true})
                .populate("comments")
                .exec();


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
