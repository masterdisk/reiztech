import Products from "../models/products";

export default {
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
    }
}
