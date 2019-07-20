import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import LoginRouter from 'pages/login/LoginRouter.jsx';
import AuthRouter from 'pages/auth/AuthRouter.jsx';
import HomeRouter from 'pages/home/HomeRouter.jsx';
import ErrorServer from 'pages/err/Error.jsx';

// Declaration of routes for at sub-routes of app.

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={LoginRouter}/>
      <Route path='/auth' component={AuthRouter}/>
      <Route path='/home' component={HomeRouter}/>
      <Route path='*' component={ErrorServer}/>
      <Redirect to="/" component={LoginRouter} />
    </Switch>
  </BrowserRouter>
)

export default Routes