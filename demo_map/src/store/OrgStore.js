import { makeAutoObservable } from "mobx";

export default class OrgStore {
  constructor() {
    this._category = [];
    /** Для отображения меток на карте в зависимости от выбранной категории */
    this._selectedCategory = [];
    this._spisokCats = [];
    this._type = [];
    this._locality = [];
    this._selectedLocality = [];
    this._org = [];
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
    return this._org;
  }
}
