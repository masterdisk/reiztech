export default class Product {
  private _id: number;
  private _title: string;
  private _description: string;
  private _brand: string;
  private _category: string;
  private _discountPercentage: number;
  private _images: string[];
  private _price: number;
  private _rating: number;
  private _stock: number;
  private _thumbnail: string;
  constructor(id: number, title: string, description: string, brand: string, category: string, discountPercentage: number, images: string[], price: number, rating: number, stock: number, thumbnail: string) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._brand = brand;
    this._category = category;
    this._discountPercentage = discountPercentage;
    this._images = images;
    this._price = price;
    this._rating = rating;
    this._stock = stock;
    this._thumbnail = thumbnail;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get brand(): string {
    return this._brand;
  }

  get category(): string {
    return this._category;
  }

  get discountPercentage(): number {
    return this._discountPercentage;
  }

  get images(): string[] {
    return this._images;
  }

  get price(): number {
    return this._price;
  }

  get rating(): number {
    return this._rating;
  }

  get stock(): number {
    return this._stock;
  }

  get thumbnail(): string {
    return this._thumbnail;
  }

}