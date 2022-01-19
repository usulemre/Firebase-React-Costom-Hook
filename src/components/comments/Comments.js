import React, { useState } from "react";
import CommentForm from "./CommentForm";
import classes from "./Comments.module.css";
const Comments = () => {
  const [isValid, setIsValid] = useState(false);
  const startAddCommentHandler = () => {
    setIsValid(true);
  };
  return (
    <section className={classes.comments}>
      <h2>User Components</h2>
      {!isValid && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add Comment
        </button>
      )}
      {isValid && <CommentForm />}
    </section>
  );
};

export default Comments;
