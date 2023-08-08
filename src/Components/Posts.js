import React, { useState } from 'react';
import Post1 from './BlogPost1';
import Post2 from './BlogPost2';
import Post3 from './BlogPost3';
import Post4 from './BlogPost4';

const Posts = ({ posts, comments, onCommentSubmit, postsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="posts-container">
        {currentPosts.map((post) => (
          <div className="post-card" key={post.id}>
            {post.id === 1 && (
              <Post1
                post={post}
                comments={comments[post.id] || []}
                onCommentSubmit={(comment) => onCommentSubmit(post.id, comment)}
              />
            )}
            {post.id === 2 && (
              <Post2
                post={post}
                comments={comments[post.id] || []}
                onCommentSubmit={(comment) => onCommentSubmit(post.id, comment)}
              />
            )}
            {post.id === 3 && (
              <Post3
                post={post}
                comments={comments[post.id] || []}
                onCommentSubmit={(comment) => onCommentSubmit(post.id, comment)}
              />
            )}
            {post.id === 4 && (
              <Post4
                post={post}
                comments={comments[post.id] || []}
                onCommentSubmit={(comment) => onCommentSubmit(post.id, comment)}
              />
            )}
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
