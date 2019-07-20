import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login/Login.jsx';
import Register from './register/Register.jsx';
import ErrorServer from 'pages/err/Error.jsx';

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path='/auth/login' component={Login} />
      <Route exact path='/auth/register' component={Register} />
      <Route path='*' component={ErrorServer}/>
    </Switch>
  );
};

export default AuthRouter;
