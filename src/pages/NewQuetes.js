import React from "react";
import { useHistory } from "react-router-dom";
import QuetesForm from "../components/Quetes/QuetesForm";

const NewQuates = () => {
  const history = useHistory();

  const addQuoteHandler = (applyData) => {
    console.log(applyData);
    history.push("/quotes");
  };
  return <QuetesForm onAdd={addQuoteHandler} />;
};

export default NewQuates;
