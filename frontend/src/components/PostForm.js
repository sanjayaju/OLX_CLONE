import React, { useState } from 'react';
import axios from '../utils/axios';

const PostForm = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('description', description);
    formData.append('image', image);

    await axios.post('/api/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    setDescription('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="What's on your mind?"
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
