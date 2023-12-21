import Product from "./product";

export default class Products {

    private _limit: number;
    private _products: Product[];
    private _skip: number;
    private _total: number;
    constructor(limit: number, products: Product[], skip: number, total: number) {
        this._limit = limit;
        this._products = products;
        this._skip = skip;
        this._total = total;
    }

    get limit(): number {
        return this._limit;
    }

    set limit(value: number) {
        this._limit = value;
    }

    get products(): Product[] {
        return this._products;
    }

    set products(value: Product[]) {
        this._products = value;
    }

    get skip(): number {
        return this._skip;
    }

    set skip(value: number) {
        this._skip = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }





}