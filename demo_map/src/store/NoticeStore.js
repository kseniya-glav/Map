import { makeAutoObservable } from "mobx";

export default class NoticeStore {
  constructor() {
    this._notice = {};
    this._allNotice = [];
    this._selectedNotice = "";

    this._category = [];
    this._selectedCategory = [];
    this._spisokCats = [];
    this._type = [];

    makeAutoObservable(this);
  }

  setNotice(notice) {
    this._notice = notice;
  }


  get notice() {
    return this._notice;
  }

  setAllNotice(notice) {
    this._allNotice = notice;
  }

  get allNotice() {
    return this._allNotice;
  }

  setSelectedNotice(notice) {
    this._selectedNotice = notice;
  }

  get selectedNotice() {
    return this._selectedNotice;
  }

  removeAllSelectedNoticeActive() {
    this._allNotice.forEach((item) => (item.active = false));
  }

  removeNotice(id) {
    this._allNotice = this._allNotice.filter((item) => item.id !== id);
  }

  setCategory(category) {
    this._category = category;
  }

  setSelectedCategory(category) {
    this._selectedCategory.push(category);
  }

  removeSelectedCategory(category) {
    this._selectedCategory = this._selectedCategory.filter(
      (item) => item !== category
    );
  }

  setSpisokCats(list) {
    list.forEach((element) => {
      element.categoryName = element.categoryName.split();
    });
    const newList = [];
    // Создаю новый массив с ключом categoryName типом массив строк
    list.forEach((item) => {
      const index = newList.findIndex(
        (el) => el.organizationName === item.organizationName
      );
      if (index === -1) {
        newList.push(item);
      } else {
        newList[index].categoryName.push(...item.categoryName);
      }
    });
    this._spisokCats = newList;
  }

  setType(type) {
    this._type = type;
  }

  get category() {
    return this._category;
  }

  get selectedCategory() {
    return this._selectedCategory;
  }

  get spisokCats() {
    return this._spisokCats;
  }

  get type() {
    return this._type;
  }

}
