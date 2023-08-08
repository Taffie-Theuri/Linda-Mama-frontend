import React, { useState } from 'react';

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
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleChange}
          placeholder="Write your comment..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
