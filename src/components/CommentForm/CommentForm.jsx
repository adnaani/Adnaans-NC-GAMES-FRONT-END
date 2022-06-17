import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import "./CommentForm.css";
const CommentForm = ({ handleSubmit, submitLabel }) => {
  const [body, setBody] = useState("");
  // const [author, setAuthor] = useState("");
  const isTextareaDisabled = body.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    const input = { author: loggedUser.username, body };
    handleSubmit(input);
    setBody("");
  };
  const { loggedUser } = useContext(UserContext);

  return (
    <form onSubmit={onSubmit} className="comment-form-container">
      <section>
        {Object.keys(loggedUser).length === 0 ? (
          <Link to="/users">
            <h3>Please Select a User</h3>
          </Link>
        ) : (
          <h3>logged as: {loggedUser.username} </h3>
        )}
      </section>
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
