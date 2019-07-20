import React from 'react';
import { LoginCss } from './LoginStyled';
import FormLogin from 'components/forms/formLogin/FormLogin.jsx';

const Login = () => {
  
  return (
    <LoginCss>
      <h2>Login</h2>
      <FormLogin />
    </LoginCss>
  );
};

export default Login;
