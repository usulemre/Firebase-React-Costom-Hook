import React, { useEffect, useRef } from "react";
import useFetch from "../../hooks/use-http";
import { addComment } from "../../lib/Apı";
import Loading from "../UI/Loading";
import classes from "./CommentForm.module.css";
const CommentForm = (props) => {
  const commentRef = useRef();
  const { status, sendRequest, error } = useFetch(addComment);
  const { onAddedComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const formAddHandler = (event) => {
    event.preventDefault();
    const commentText = commentRef.current.value;

    sendRequest({ commentData: { text: commentText }, quoteId: props.quoteId });
  };
  return (
    <form onSubmit={formAddHandler} className={classes.form}>
      {status === "pending" && (
        <div className="centered">
          <Loading />
        </div>
      )}
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentRef}></textarea>
      </div>
      <div className={classes.action}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;
