import { makeAutoObservable } from "mobx";

export default class AdminOrgStore {
  constructor() {
    this._category = [];
    this._selectedCategory = [];
    this._spisokCats = [];
    this._type = [];
    this._locality = [];
    this._selectedLocality = [];
    this._org = [];
    this._checkedOrg = ["Государственная", "Некоммерческая"];
    this._selectedOrg = "";

    makeAutoObservable(this);
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

  setSelectedOrg(org) {
    this._selectedOrg = org;
  }

  removeAllSelectedOrgActive() {
    this._org.forEach((item) => (item.active = false));
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

  setOrg(org) {
    this._org = org;
  }

  setCheckedOrg(checkedOrg) {
    this._checkedOrg.push(checkedOrg);
  }

  removeCheckedOrg(checkedOrg) {
    this._checkedOrg = this._checkedOrg.filter((item) => item !== checkedOrg);
  }

  setLocality(locality) {
    this._locality = locality;
  }

  setSelectedLocality(locality) {
    this._selectedLocality = locality;
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

  get locality() {
    return this._locality;
  }

  get selectedLocality() {
    return this._selectedLocality;
  }

  get org() {
    this._org.forEach((item) => (item.active = false));
    return this._org;
  }

  get selectedOrg() {
    return this._selectedOrg;
  }

  get checkedOrg() {
    return this._checkedOrg;
  }

  removeOrg(id) {
    this._org = this._org.filter((item) => item.id !== id);
  }

  updateOrg(id, newData) {
    for (const org of this._org) {
      if (org.id === id) {
        Object.assign(org, newData);
        break;
      }
    }
  }
}
