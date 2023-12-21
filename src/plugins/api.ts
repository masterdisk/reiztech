import Products from "../models/products";
import Product from "../models/product";
import {fetchHelper} from "./fetchHelper";

export interface ProductResponse {
    id: number;
    title: string;
    description: string;
    brand: string;
    category: string;
    discountPercentage: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
}

export interface ProductsResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}


export default {
     async getProductsUsingHelper(): Promise<Products> {
        return fetchHelper<Products>('https://dummyjson.com/products');
    },
    async getProducts(): Promise<Products | null> {
        // Return the Promise itself
        return fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data: Products) => {
                return data; // This will be wrapped in a Promise automatically
            })
            .catch(error => {
                console.error(error);
                return null; // You can decide to return null or handle the error as you see fit
            });
    },
    async getProductById(id : string): Promise<Product | null> {
        // Return the Promise itself
        return fetch('https://dummyjson.com/products/'+id)
            .then(res => res.json())
            .then((data: Product) => {
                return data; // This will be wrapped in a Promise automatically
            })
            .catch(error => {
                console.error(error);
                return null; // You can decide to return null or handle the error as you see fit
            });
    },
    async getProductsByTitle(title : string): Promise<Products | null> {
        // Return the Promise itself
        return fetch('https://dummyjson.com/products/search?q='+title)
            .then(res => res.json())
            .then((data: Products) => {
                return data; // This will be wrapped in a Promise automatically
            })
            .catch(error => {
                console.error(error);
                return null; // You can decide to return null or handle the error as you see fit
            });
    },
    async getProductsByBrand(brand : string): Promise<Products | null> {
        // Return the Promise itself
        return fetch('https://dummyjson.com/products/search?q='+brand)
            .then(res => res.json())
            .then((data: Products) => {
                return data; // This will be wrapped in a Promise automatically
            })
            .catch(error => {
                console.error(error);
                return null; // You can decide to return null or handle the error as you see fit
            });
    }
}
