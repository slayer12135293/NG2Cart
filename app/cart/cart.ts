export class Cart{
    cartName:string;
    items: CartItem[];
}
export interface CartItem {
    id:number;
    image:string;
    name:string;
    price:number;
    quantity: number;     
}

export interface IProduct{
    id:number;
    image: string;
    name: string;
    price:number;
}