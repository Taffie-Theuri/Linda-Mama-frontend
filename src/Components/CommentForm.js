import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId, onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/posts/${postId}/comments`, { content: comment });
      const newComment = response.data;

      // Call the onSubmit function passed from the parent component
      onSubmit(newComment);

      // Clear the comment input field
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error.message);
    }
  };

  return (
    <div className="comment-form-container">
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          className="comment-input"
          value={comment}
          onChange={handleChange}
          placeholder="Write your comment..."
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
