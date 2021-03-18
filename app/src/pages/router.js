import React from 'react';
import { Route, Switch, BrowserRouter  } from 'react-router-dom';
import MainPageContainer from "./mainpagecontainer.js";
import PostViewContainer from "./postviewcontainer.js";
import Login from './Login';
import PostFormContainer from "./postformcontainer.js";
const ForumRouter = () => (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={MainPageContainer} />
      <Route exact path="/post" component={PostFormContainer} />
      <Route exact path="/:postId" component={PostViewContainer} />
    </Switch>
)

export default ForumRouter;
