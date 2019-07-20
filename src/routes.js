import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import AuthRouter from 'pages/auth/AuthRouter.jsx';
import HomeRouter from 'pages/home/HomeRouter.jsx';
import ErrorServer from 'pages/err/Error.jsx';

// Declaration of routes for at sub-routes of app.

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/auth' component={AuthRouter}/>
      <Route exact path='/home' component={HomeRouter}/>
      <Route exact path="/" render={() => <Redirect to="/auth/login" />} />
      <Route path='*' component={ErrorServer}/>
    </Switch>
  </BrowserRouter>
)

export default Routes