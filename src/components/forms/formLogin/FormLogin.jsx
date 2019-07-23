import React, { useState } from 'react';
import { FormLoginCss, FormLoginDataCss } from './FormLoginStyled';
import LoginFormData from './loginFormData/LoginFormData.jsx';
import PasswordFormData from './passwordFormData/PasswordFormData.jsx';
import { loginRequiredError } from './Validators';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const FormLogin = () => {

  const [login, setLogin] = useState({
    value: '',
    error: {
      value: false,
      msg: ''
  }});

  const [password, setPassword] = useState({
    value: '',
    error: {
      value: false,
      msg: ''
  }});

  const loginInputHandler = (data) => {
    setLogin({...login, value: data, error: {value: false}});
  }

  const passwordInputHandler = (data) => {
    setPassword({...password, value: data, error: {value: false}});
  }

  const submit = (event) => {
    if (loginRequiredError.test(login.value)) {
      setLogin({
        ...login,
        error: {
          value: true,
          msg: loginRequiredError.msg
        }
      });
    }
    event.preventDefault()
  }

  console.log('Render');

  return (
    <FormLoginCss onSubmit={submit}>
      <h3>Form Login</h3>
      
      <FormLoginDataCss>
        <FontAwesomeIcon icon={faUser} size='2x' />
        <LoginFormData login={login.value} loginData={loginInputHandler} error={login.error.value}/>
      </FormLoginDataCss>
      
      { login.error.value ? <span>{login.error.msg}</span> : null }

      <FormLoginDataCss>
        <FontAwesomeIcon icon={faLock} size='2x' />
        <PasswordFormData login={password.value} passwordData={passwordInputHandler} error={password.error.value}/>
      </FormLoginDataCss>
      
      { password.error.value ? <span>{password.error.msg}</span> : null }

      <input type="submit" value="Enviar" />
    </FormLoginCss>
  );
};

export default FormLogin;
