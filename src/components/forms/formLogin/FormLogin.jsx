import React, { useState } from 'react';
import { FormLoginCss } from './FormLoginStyled';
import LoginFormData from './loginFormData/LoginFormData.jsx';

const FormLogin = () => {

  const [login, setLogin] = useState('');

  const loginInputHandler = (data) => {
    setLogin(data);
  }

  return (
    <FormLoginCss>
      <h3>Form Login</h3>
      <LoginFormData loginData={loginInputHandler} />
      <span>{login}</span>
    </FormLoginCss>
  );
};

export default FormLogin;
