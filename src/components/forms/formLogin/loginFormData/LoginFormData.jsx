import React, { useState, useEffect } from 'react';
import InputData from 'components/ui/inputData/InputData.jsx';
import { requiredLogin } from './Validators';

const LoginFormData = ({ loginData }) => {

  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState({
    error: false,
    msg: ''
  });

  useEffect(() => {
    function update() {
      loginData(login);
    }
    update();
  }, [login, loginData]);

  const loginInputHandler = (event) => {
    setLogin(event.target.value);
  }

  const onBlurHandler = () => {
    console.log(loginError);
    if (requiredLogin.test(login)) {
      setLoginError({...loginError, error: true, msg: requiredLogin.msg});
      return;
    }
    else if (loginError.error) {
      setLoginError({...loginError, error: false, msg: ''});
    }
  }

  return (
    <>
      <InputData
        type='text' 
        login='login' 
        placeholder='Nome'
        value={login.data} 
        onChange={loginInputHandler}
        width={'300px'}
        onBlur={onBlurHandler}
        error={loginError.error}
      />
      {
        loginError.error ? <span>{ loginError.msg }</span> : null
      }
    </>
  );
}

export default LoginFormData;
