import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
//pages
import Homepage from "pages";
import PageNotFound from "pages/404";
import UserDetails from "pages/UserDetails";
import PostDetails from "pages/PostDetails";

import { ROUTES } from 'config';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.ROOT} component={Homepage} />
                <Route path={ROUTES.POST_DETAILS} component={PostDetails} />
                <Route path={ROUTES.USER_DETAILS} component={UserDetails} />
                <Route exact path={ROUTES.ERROR} component={PageNotFound} />
                <Redirect to={ROUTES.ERROR} />
            </Switch>
        </Router>
    );
}

export default App;
