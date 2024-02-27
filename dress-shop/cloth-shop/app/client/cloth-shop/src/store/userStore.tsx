import { makeAutoObservable } from "mobx";


export default class UserStore {
    _isAuth: boolean;
    _user: object;

    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this);
    }

    setIsAuth(isAuth: boolean) {
        this._isAuth = isAuth;
    }

    setUser(user: object) {
        this._user = user
    }

    get isAuth(): boolean {
        return this._isAuth
    }

    get user(): object {
        return this._user
    }
}