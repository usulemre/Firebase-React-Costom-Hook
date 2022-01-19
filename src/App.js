import { Redirect, Route, Switch } from "react-router-dom";
import AllQuetes from "./pages/AllQuetes";
import NewQuetes from "./pages/NewQuetes";
import QuetesDetail from "./pages/QuetesDetail";
import NotFound from "./pages/NotFound";
import Layout from "./components/UI/Layout";
function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
