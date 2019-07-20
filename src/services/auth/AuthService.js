import User from 'models/user/User';

const users = () => {
  const users = [];
  users.push(new User('kaio', '123'));
  users.push(new User('vih', '123456'));
  users.push(new User('xena', '654321'));

  return [...users];
}

const time = 3e3;

class AuthService {
  constructor () {
    this._users = users();
  }

  // Verifica se o usuário está cadastrado.
  userIsValid(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        for (let index = 0; index < this._users.length; index++) {
          if (user.name === this._users[index].name && user.password === this._users[index].password) {
            resolve(true);
          }
        }
        resolve(false);
      }, time);
    });
  }

  // Cadastra o usuário no sistema.
  singUp(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userExist = this.userIsValid(user);
    
        if (!userExist) {
          this._users.push(user);
          resolve(true);
        }

        resolve(false);
      }, time);
    })
  }

}// End Class

export default AuthService;
