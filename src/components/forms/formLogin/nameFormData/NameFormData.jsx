import React, { useState, useEffect } from 'react';
import InputData from 'components/ui/inputData/InputData.jsx';

const minNameChars = 4;
const minNameCharsMsg = `Mínimo ${minNameChars} letras`;

const NameFormData = ({ nameData }) => {

  const [name, setName] = useState('');
  const [minNameCharsError, setMinNameCharsError] = useState(false);

  useEffect((prev) => {
    function update() {
      console.log(prev);
      nameData(name);
    }
    update();
  }, [name, nameData]);

  const nameInputHandler = (event) => {
    setName(event.target.value);
  }

  const onBlurHandler = () => {
    if (name.length < minNameChars) {
      setMinNameCharsError(true);
    }
    else {
      setMinNameCharsError(false);
    }
  }

  return (
    <>
      <InputData
        type='text' 
        name='name' 
        placeholder='Nome'
        value={name.data} 
        onChange={nameInputHandler}
        width={'300px'}
        onBlur={onBlurHandler}
        error={minNameCharsError}
      />
      {
        minNameCharsError ? <span>{ minNameCharsMsg }</span> : null
      }
    </>
  );
}

export default NameFormData;
