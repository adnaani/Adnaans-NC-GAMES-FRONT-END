import React from "react";
import * as BiIcons from "react-icons/bi";

const CommentCard = ({ comment }) => {
  return (
    <div key={comment.comment_id} className="comment">
      <div className="comment-image-container">
        <BiIcons.BiUserCircle />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.author}</div>
          <div>{comment.created_at}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
      </div>
    </div>
  );
};

export default CommentCard;
