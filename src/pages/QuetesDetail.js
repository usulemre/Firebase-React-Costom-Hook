import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/Quetes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];
const QuetesDetail = () => {
  const match = useParams();

  const quates = DUMMY_QUOTES.find((item) => item.id === match.quoteId);
  return (
    <Fragment>
      <HighlightedQuote text={quates.text} author={quates.author} />
      <Comments />
    </Fragment>
  );
};

export default QuetesDetail;
