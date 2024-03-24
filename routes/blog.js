const express = require("express");

const router = express.Router();

//Import Controller
const {dummyLink} = require("../controllers/dummyController");
const {createComment} = require("../controllers/CommentController");
const { createPost, getAllPosts } = require("../controllers/postController");
const { likePost, unlikePost } = require("../controllers/LikeController");





// Mappind Create
router.get("/dummyRoute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);



//Export

module.exports = router;