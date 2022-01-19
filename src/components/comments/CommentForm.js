import React from "react";
import classes from "./CommentForm.module.css";
const CommentForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5"></textarea>
      </div>
      <div className={classes.action}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;
