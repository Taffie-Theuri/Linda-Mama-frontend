import React from 'react';
import { Card } from 'react-bootstrap';
import CommentForm from './CommentForm';

const Post4 = ({ post, comments, onCommentSubmit }) => {
  return (
    <Card>
      <Card.Img variant="top" src={post.image} width={20} height={350} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
        <div>
          {comments.map((comment) => (
            <div key={comment.id}>{comment.content}</div>
          ))}
          <CommentForm postId={post.id} onSubmit={onCommentSubmit} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post4;
