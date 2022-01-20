import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuetesForm from "../components/Quetes/QuetesForm";
import useFetch from "../hooks/use-http";
import { addQuote } from "../lib/Apı";

const NewQuates = () => {
  const histroy = useHistory();
  const { status, sendRequest } = useFetch(addQuote);

  useEffect(() => {
    if (status === "completed") {
      histroy.push("/quotes");
    }
  }, [status, histroy]);

  const addQuoteHandler = (applyData) => {
    sendRequest(applyData);
  };
  return (
    <QuetesForm isLoading={status === "pending"} onAdd={addQuoteHandler} />
  );
};

export default NewQuates;
