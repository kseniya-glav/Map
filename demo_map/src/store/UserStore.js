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

  setSelectedUser(us) {
    this._selectedUser = us;
  }

  removeAllSelectedUserActive() {
    this._allUsers.forEach((item) => (item.active = false));
  }

  get selectedUser() {
    return this._selectedUser;
  }
}

