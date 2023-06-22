interface Iproducts {
    _id?:  string;
    name: string;
    price: number;
    priceSale?: number;
    isFavorite:boolean;
    featured: boolean;
    image: Array<string>;
    description: string;
    description_short?: string;
    hot_sale?: number;
    size: Array<string>;
    color: Array<string>;
    quantity: number;
    categoryId: string;
    
    rating: number;

}