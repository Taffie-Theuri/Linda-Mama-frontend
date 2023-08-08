import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './Components/Posts';
import Navbar from './Components/BlogNav';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/posts'); // Replace with your Rails server URL
      setPosts(response.data);
      // Fetch comments for each post
      const commentRequests = response.data.map((post) =>
        axios.get(`http://localhost:3001/posts/${post.id}/comments`)
      );
      const commentsResponse = await Promise.all(commentRequests);
      const commentsData = commentsResponse.map((res) => res.data);
      const commentsObj = {};
      response.data.forEach((post, index) => {
        commentsObj[post.id] = commentsData[index];
      });
      setComments(commentsObj);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleCommentSubmit = async (postId, comment) => {
    try {
      const response = await axios.post(`http://localhost:3001/posts/${postId}/comments`, { text: comment });
      const newComment = response.data;
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: [...(prevComments[postId] || []), newComment],
      }));
    } catch (error) {
      console.error('Error submitting comment:', error.message);
    }
  };

  return (
    <div className="main-container" style={{ backgroundColor: 'aliceblue' }}>
      <Navbar />
      {posts.length > 0 ? (
        <Posts
          postsPerPage={4} 
          posts={posts}
          comments={comments}
          onCommentSubmit={handleCommentSubmit}
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default App;
