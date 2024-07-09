import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from '../utils/axios';

const Post = ({ post }) => {
  const { user } = useContext(AuthContext);

  const handleLike = async () => {
    try {
      await axios.post(`/api/posts/${post._id}/like`);
    } catch (error) {
      console.error('Error liking post', error);
    }
  };

  return (
    <div>
      {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
      <p>{post.description}</p>
      <button onClick={handleLike}>
        {post.likes.includes(user._id) ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
};

export default Post;
