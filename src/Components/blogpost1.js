import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CommentForm from './CommentForm';
import './blogcard.css'; 

const Post1 = ({ post, comments, onCommentSubmit }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <Card className="post-card">
      <Card.Img variant="top" src={post.image} className="post-image" />
      <Card.Body>
        <Card.Title className="post-title">{post.title}</Card.Title>
        <Card.Text className="post-content">
          {showFullContent ? post.content : post.content.slice(0, 200) + '...'}
          <br />
          <button onClick={toggleContent} className="read-more-link">
            {showFullContent ? 'Read Less' : 'Read More'}
          </button>
          <div className="comments-section">
            {comments.map((comment) => (
              <div key={comment.id} className="comment">{comment.content}</div>
            ))}
            <CommentForm postId={post.id} onSubmit={onCommentSubmit} />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post1;
