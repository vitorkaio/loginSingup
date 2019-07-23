import React from 'react';
import InputData from 'components/ui/inputData/InputData.jsx';

const PasswordFormData = ({ password, passwordData, error }) => {

  const passwordInputHandler = (event) => {
    passwordData(event.target.value);
  }

  return (
    <InputData
      type='password' 
      name='password' 
      required
      placeholder='Senha'
      value={password} 
      onChange={passwordInputHandler}
      width={'100%'}
      error={error}
    />
  );
}

export default PasswordFormData;
