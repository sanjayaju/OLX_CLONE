// controllers/postController.js
const Post = require('../models/Post');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

exports.createPost = upload.single('file'), async (req, res) => {
  const { description } = req.body;
  const image = req.file.filename;
  const post = new Post({ userId: req.session.userId, image, description });
  await post.save();
  res.send('Post created');
};

exports.likePost = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findById(postId);
  post.likes += 1;
  await post.save();
  res.send('Post liked');
};
