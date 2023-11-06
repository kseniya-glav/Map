import {makeAutoObservable} from "mobx"

export default class OrgStore {
    constructor() {
        this._category = []
        this._type = []
        this._locality = []
        this._selectedLocality = []
        this._org = []
        makeAutoObservable(this)
    }

    setCategory(category) {
        this._category = category
    }
    
    setType(type){
        this._type = type
    }

    setOrg(org){
        this._org = org
    }

    setLocality(locality){
        this._locality = locality
    }

    setSelectedLocality(locality){
        this._selectedLocality = locality
    }

    get category(){
        return this._category
    }

    get type(){
        return this._type
    }

    get locality(){
        return this._locality
    }

    get selectedLocality(){
        return this._selectedLocality
    }

    get org(){
        return this._org
    }

}