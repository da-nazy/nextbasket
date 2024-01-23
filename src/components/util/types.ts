export type product={
        id?:number,
        title?:string,
        description?:string,
        price?:number,
        discountPercentage?:number,
        rating?:number,
        stock?: number,
        brand:string,
        category?:string,
        thumbnail?:string,
        images?:string[],
        quantity?:number
        }

export type allProducts={
    products:product[],
    total:number,
    skip:number,
    limit:number
}
export type products=product[];
export type wishlist=products;
export type cart=products;

export type appStore={
    wishlist:wishlist,
    cart:cart,
    
}