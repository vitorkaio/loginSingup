import validate from 'validate.js'

const loginConstraints = {
  login: {
    presence: true,
    length: {
      minimum: 4,
      message: "deve ter no minímo 4 caracteres!"
    }
  },
}

export const validateLogin = (value) => {
  const res = validate({login: value}, loginConstraints)
  return res === undefined ? false : res.login[0]
}

const passwordConstraints = {
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "deve ter no mínimo 6 caracteres!"
    }
  }
}


export const validatePassword = (value) => {
  const res = validate({password: value}, passwordConstraints)
  return res === undefined ? false : res.password[0]
}

export const loginRequiredError = {
  value: 0,
  msg: `O login é obrigatório`,
  test: (login) => {
    return login.length === 0 ? true : false;
  }
}
