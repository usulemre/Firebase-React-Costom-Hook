import React from "react";
import classes from "./HighlightedQuote.module.css";
const HighlightedQuote = (props) => {
  return (
    <div className={classes.item}>
      <p>{props.author}</p>
      <h2>{props.text}</h2>
    </div>
  );
};

export default HighlightedQuote;
