import React from 'react';
import InputData from 'components/ui/inputData/InputData.jsx';

const LoginFormData = ({ login, loginData, error }) => {

  const loginInputHandler = (event) => {
    loginData(event.target.value);
  }

  return (
    <InputData
      type='text' 
      name='login'
      placeholder='Login'
      value={login} 
      onChange={loginInputHandler}
      width={'100%'}
      error={error}
    />
  );
}

export default LoginFormData;
