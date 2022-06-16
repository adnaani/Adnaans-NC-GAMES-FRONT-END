import React, { useState } from "react";
import "./CommentForm.css";
const CommentForm = ({ handleSubmit, submitLabel }) => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const isTextareaDisabled = body.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    const input = { author, body };
    handleSubmit(input);
    setBody("");
    setAuthor("");
  };

  return (
    <form onSubmit={onSubmit} className="comment-form-container">
      <input
        className="comment-form-input"
        type="text"
        value={author}
        placeholder="enter username"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        className="comment-form-textarea"
        value={body}
        placeholder="enter comment"
        onChange={(e) => setBody(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
    </form>
  );
};

export default CommentForm;
