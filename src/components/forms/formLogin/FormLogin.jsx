import React, { useState, useEffect, useCallback } from 'react';
import { FormLoginCss, FormLoginDataCss } from './FormLoginStyled';
import { validateLogin, validatePassword } from './Validators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { produce } from 'immer';

import InputData from 'components/ui/inputData/InputData.jsx';


const FormLogin = () => {

  const [control, setControl] = useState({
    login: {
      value: '',
      touch: false,
      isValid: {
        error: false,
        msg: '',
        validate: validateLogin
      }
    },
    password: {
      value: '',
      touch: false,
      isValid: {
        error: false,
        msg: '',
        validate: validatePassword
      }
    }
  })

  const validateForm = useCallback((submit) => {
    setControl(produce(control, draft => {
      for (let item in control) {
        if (submit) draft[item].touch = true
        if (control[item].touch) {
          const res = draft[item].isValid.validate(control[item].value)
          if (res) {
            draft[item].isValid.error = true
            draft[item].isValid.msg = res
          }
          else {
            draft[item].isValid.error = false
            draft[item].isValid.msg = ''
          }
        }
      }
    }))
  }, [control])

  useEffect(() => {
    validateForm(false)
    console.log(control)
  }, [control, validateForm])

  const controlInputHandler = (data, type) => {
    setControl(produce(control, draft => {
      draft[type].value = data
    }));  
  }

  const onBlurHandler = (type) => {
    setControl(produce(control, draft => {
      draft[type].touch = true
    }))
  }

  const handlerSubmit = (event) => {
    validateForm(true)
    event.preventDefault()
  }

  return (
    <FormLoginCss onSubmit={handlerSubmit}>
      <h3>Form Login</h3>
      
      <FormLoginDataCss>
        <FontAwesomeIcon icon={faUser} size='2x' />
        <InputData
          onBlur={() => onBlurHandler('login')}
          type='text' 
          name='login'
          placeholder='Login'
          value={control.login.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'login')}
          width={'100%'}
          error={control.login.isValid.error}
        />
      </FormLoginDataCss>

      {control.login.isValid.error && <span>{control.login.isValid.msg}</span>}

      <FormLoginDataCss>
        <FontAwesomeIcon icon={faLock} size='2x' />
        <InputData
          onBlur={() => onBlurHandler('password')}
          type='password' 
          name='password'
          placeholder='Senha'
          value={control.password.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'password')}
          width={'100%'}
          error={control.password.isValid.error}
        />
      </FormLoginDataCss>

      {control.password.isValid.error && <span>{control.password.isValid.msg}</span>}
      
      <input type="submit" value="Enviar" />
    </FormLoginCss>
  );
};

export default FormLogin;
