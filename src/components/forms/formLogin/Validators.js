
export const loginRequiredError = {
  value: 0,
  msg: `O login é obrigatório`,
  test: (login) => {
    return login.length === 0 ? true : false;
  }
}
