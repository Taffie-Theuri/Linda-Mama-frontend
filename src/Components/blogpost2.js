import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CommentForm from './CommentForm';

const Post2 = ({ post, comments, onCommentSubmit }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <Card>
      <Card.Img variant="top" src={post.image} width={20} height={350} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {showFullContent ? post.content : post.content.slice(0, 200) + '...'}
          <br />
          <a onClick={toggleContent} className="btn btn-primary">
            {showFullContent ? 'Read Less' : 'Read More'}
          </a>
          <div>
            {comments.map((comment) => (
              <div key={comment.id}>{comment.content}</div>
            ))}
            <CommentForm postId={post.id} onSubmit={onCommentSubmit} />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post2;
