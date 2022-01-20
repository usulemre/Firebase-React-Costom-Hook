import React, { Fragment, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/Quetes/HighlightedQuote";
import useFetch from "../hooks/use-http";
import { getSingleQuote } from "../lib/Apı";
import Loading from "../components/UI/Loading";

const QuetesDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    status,
    error,
    sendRequest,
    data: loadedQuote,
  } = useFetch(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <Loading />
      </div>
    );
  }
  if (error) {
    <div className="centered">{error}</div>;
  }
  if (!loadedQuote.text) {
    return <p>No qoute found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
