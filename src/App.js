import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/UI/Layout";
import Loading from "./components/UI/Loading";
const AllQuetes = React.lazy(() => import("./pages/AllQuetes"));
const NewQuetes = React.lazy(() => import("./pages/NewQuetes"));
const QuetesDetail = React.lazy(() => import("./pages/QuetesDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <Loading />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuetes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuetesDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuetes />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
