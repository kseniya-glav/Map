import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._allUsers = [];
    this._selectedUser = "";
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  get isAuth() {
    return this._isAuth;
  }

  setUser(user) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

  setAllUsers(users) {
    this._allUsers = users;
  }

  get allUsers() {
    return this._allUsers;
  }

  setSelectedUser(user) {
    this._selectedUser = user;
  }

  removeAllSelectedUserActive() {
    this._allUsers.forEach((item) => (item.active = false));
  }

  removeUser(id) {
    this._allUsers = this._allUsers.filter((item) => item.id !== id);
  }

  updateUser(id, newData) {
    for (const user of this._allUsers) {
      if (user.id === id) {
        Object.assign(user, newData);
        break;
      }
    }
  }

  get selectedUser() {
    return this._selectedUser;
  }
}
