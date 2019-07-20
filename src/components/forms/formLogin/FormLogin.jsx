import React, { useState } from 'react';
import { FormLoginCss } from './FormLoginStyled';
import NameFormData from './nameFormData/NameFormData.jsx';

const FormLogin = () => {

  const [name, setName] = useState('');

  const nameInputHandler = (data) => {
    setName(data);
    console.log(name);
  }

  return (
    <FormLoginCss>
      <h3>Form Login</h3>
      <NameFormData nameData={nameInputHandler} />
    </FormLoginCss>
  );
};

export default FormLogin;
