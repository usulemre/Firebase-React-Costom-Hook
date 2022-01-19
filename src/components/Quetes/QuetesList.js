import React from "react";
import QuetesItem from "./QuetesItem";
import classes from "./QuestesList.module.css";
const QuetesList = (props) => {
  return (
    <ul className={classes.list}>
      {props.quates.map((item) => (
        <QuetesItem
          key={item.id}
          text={item.text}
          author={item.author}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default QuetesList;
