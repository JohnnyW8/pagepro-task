import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
//pages
import Homepage from "./pages";
import PageNotFound from "./pages/404";
import UserDetails from "./pages/UserDetails";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path="/user/:id/:postId" component={PostDetails} />
            <Route path="/user/:id" component={UserDetails} />
            <Route exact path='/404' component={PageNotFound} />
            <Redirect to="404" />
        </Switch>
    </Router>
  )
}

export default App;
