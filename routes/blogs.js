
const express = require("express");

const router = express.Router();

const {commentBlogs} = require("../controllers/commentBlogs");
const {likedBlogs,unlikeBlogs} = require("../controllers/likedBlogs");
const {postBlogs} = require("../controllers/postBlogs");
const {getBlogs} = require("../controllers/postBlogs");


router.post("/comments/create",commentBlogs);
router.post("/likes/like",likedBlogs);
router.post("/posts/post",postBlogs);
router.get("/getblogs/getblog",getBlogs);
router.post("/likes/unlike",unlikeBlogs);


module.exports = router;

