const Post = require("../models/postModel");

exports.createPost = async (req, res) =>{
    try{
        const {title, body} = req.body;

        const response = await Post.create({title, body});

        res.json({
            post : response
        })

    }
    catch(error){
        res.status(500).json({
            error : "Error while Creating Post"
        })
    }
}

//Need SOme Testing after adding Likes

exports.getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find().populate("comments").populate("likes").exec();

        res.json({
            posts
        })


    }
    catch(error){
        res.status(500).json({
            error : "Error while fetching Post"
        })
    }
}