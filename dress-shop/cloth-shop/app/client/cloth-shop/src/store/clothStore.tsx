import { makeAutoObservable } from "mobx";


export default class ClothStore {
    _types : Array<object>;
    _clothes : Array<object>;

    constructor() {
        this._types  = [
            {id: 1, name: 'belts'},
            {id: 2, name: 'socks'},
            {id: 2, name: "t-shrts"},
            {id: 4, name: 'Pants'},
        ]

        this._clothes  = [
            {id: 1, name:'quadrat', price:40, img: "5d3c6485-3d6d-4f4f-b23c-49a7b67d5228.jpg", typeId: 4},
            {id: 2, name:'duck', price:10001, img: "492ae090-e431-4c3f-9f78-27c30473d2d5.jpg", typeId: 2},
            {id: 3, name:'black_shirt', price:35, img: "e71914de-5372-4ae4-8826-39ef48ee0698.jpg", typeId: 3},
            {id: 4, name:'rich_belt', price:10000, img: "c11253e8-533d-4778-9a4d-14105bd86c91.jpg" , typeId: 1},
        ]

        makeAutoObservable(this);
    }

    setTypes(types: Array<object>) {
        this._types = types;
    }

    setClothes(clothes: Array<object>) {
        this._clothes = clothes;
    }

    get types(): Array<object> {
        return this._types;
    }

    get clothes(): Array<object> {
        return this._clothes;
    }
}