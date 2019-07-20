
class User {
  constructor(name, password) {
    this._name = name;
    this._password = password;
  }

  setName(name) {
    this._name = name;
  }

  getName() {
    return this._password;
  }

  setPassword(password) {
    this._password = password;
  }

  getPassword() {
    return this._password;
  }

}// End Class

export default User;