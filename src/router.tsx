import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NasaSearch from "./features/nasa-search/components/NasaSearch";
import NasaViewAsset from "./features/nasa-view-asset/components/NasaViewAsset";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path="/search">
          <NasaSearch />
        </Route>
        <Route exact path="/asset/:id">
          <NasaViewAsset />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
