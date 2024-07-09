import { useClient } from 'next/client'; // Import useClient from next/client
import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { io } from 'socket.io-client';

const Page = () => {
  // Use useClient to mark this component as client-side
  useClient();

  // Example useEffect and useState usage
  useEffect(() => {
    // Example fetchPosts function to fetch data
    const fetchPosts = async () => {
      try {
        // Simulating fetch operation
        const response = await fetch('https://api.example.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts(); // Calling fetchPosts

    // Cleanup function
    const cleanupFunction = () => {
      // Perform cleanup tasks if needed
      console.log('Cleanup function executed');
    };

    return cleanupFunction; // Return the cleanup function
  }, []); // Empty dependency array means run once when component mounts

  const [posts, setPosts] = useState([]);

  // Example socket.io-client usage
  useEffect(() => {
    const socket = io(); // Replace with your socket.io server URL if needed
    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    // Cleanup function
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Page Component</h1>
      <PostForm />
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Page;
