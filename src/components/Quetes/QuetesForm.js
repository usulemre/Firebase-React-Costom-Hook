import React, { useRef } from "react";
import Card from "../UI/Card";
import classes from "./QuestesForm.module.css";
const QuetesForm = (props) => {
  const authorRef = useRef();
  const textRef = useRef();
  const addFormHandler = (event) => {
    event.preventDefault();

    const authorContent = authorRef.current.value;
    const textCurrent = textRef.current.value;

    props.onAdd({ author: authorContent, text: textCurrent });
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={addFormHandler}>
        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input id="authot" type="text" ref={authorRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" type="text" rows="5" ref={textRef} />
        </div>
        <div className={classes.action}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuetesForm;
