import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/use-http";
import { getAllComments } from "../../lib/Apı";
import Loading from "../UI/Loading";
import CommentForm from "./CommentForm";
import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
const Comments = () => {
  const params = useParams();

  console.log(params)
  const { quoteId } = params;
  
  const [isValid, setIsValid] = useState(false);

  const {
    sendRequest,
    status,
    data: loadedComments,
  } = useFetch(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsValid(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <Loading />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }
  return (
    <section className={classes.comments}>
      <h2>User Components</h2>
      {!isValid && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add Comment
        </button>
      )}
      {isValid && <CommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
