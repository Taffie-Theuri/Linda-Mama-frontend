import React, { useState } from 'react';
import './comment.css'; // Import your CSS file for component-specific styles

const CommentForm = ({ postId, onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(comment);
    setComment('');
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
        <button className="submit-button" type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
