import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{
    quantity: number;

    constructor(public items : ShoppingCart[]){}

    get totalItemCount(){
        let count = 0;
        for(let productId in this.items){
            count += this.items[productId].quantity;
        }
        return count;
    }
} 