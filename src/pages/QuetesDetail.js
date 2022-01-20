import React, { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/Quetes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];
const QuetesDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quates = DUMMY_QUOTES.find((item) => item.id === params.quoteId);

  if (!quates) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quates.text} author={quates.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuetesDetail;
