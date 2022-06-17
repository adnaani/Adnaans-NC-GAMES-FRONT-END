import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createCommentById, getCommentsById } from "../../utils/api";
import CommentCard from "../CommentCard/CommentCard";
import CommentForm from "../CommentForm/CommentForm";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    getCommentsById(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [review_id]);

  const addComment = (newComment) => {
    createCommentById(review_id, newComment).then((postCommentFromAPI) => {
      setComments((prevComment) => [postCommentFromAPI, ...prevComment]);
    });
  };

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="comments">
      <div className="title-container">
        {comments.length === 0 ? (
          <h3 className="comments-title">Be the first to comment</h3>
        ) : (
          <h3 className="comments-title">{comments.length} Comments</h3>
        )}
      </div>

      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <ul className="comments-container">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default Comments;
