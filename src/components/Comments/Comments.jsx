import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../../utils/api";
import CommentCard from "../CommentCard/CommentCard";

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

  console.log(comments);
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="comments">
      {comments.length === 0 ? (
        <h3 className="comments-title">Be the First Comment</h3>
      ) : (
        <h3 className="comments-title">{comments.length} Comments</h3>
      )}
      <div className="comments-container">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
