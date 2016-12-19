import React from "react";

import { Route, IndexRoute} from "react-router";

import Layout from "./components/Layout";
import Index from "./components/Index";
import Help from "./components/Help/Help";
import NotFoundPage from "./components/NotFoundPage";

const routes = (
  <Route path="/" component={Layout} >
        <IndexRoute component={Index}/>
        <Route path="/help" component={Help}/>
        <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;