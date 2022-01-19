import React from "react";
import { Link } from "react-router-dom";
import classes from "./QuestesItem.module.css";
const QuetesItem = (props) => {
  return (
    <li className={classes.Item}>
      <div>
        <h2>{props.author}</h2>
        <h1>{props.text}</h1>
      </div>
      <Link className="btn" to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};
export default QuetesItem;
