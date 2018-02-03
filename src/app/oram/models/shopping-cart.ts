import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart{
    quantity: number;
    items:ShoppingCartItem[] = [];


    constructor(public itemsMap : { [productId:string]:ShoppingCartItem } ) {
        this.itemsMap = itemsMap || {};

        for(let productId in itemsMap){
            let item = itemsMap[productId];
            this.items.push( new ShoppingCartItem({ ...item, $key : productId }));
           // this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
            
        console.log(this.items);
    }




    get totalItemCount(){
        let count = 0;
        for(let productId in this.itemsMap){
            count += this.itemsMap[productId].quantity;
        }
        return count;
    }

    get totalPrice(){
        let sum = 0;
        for(let productId in this.items){
            sum += this.items[productId].totalPrice;
        }
        return sum;
    }

    getQuantity(product: Product){ 
        //console.log('this.shoppingCart', this.shoppingCart);
      //  if(!this.shoppingCart) return 0;
        console.log('this.shoppingCart---', this.itemsMap[product.$key]);
        console.log('product---',product);
        
        let item = this.itemsMap[product.$key];
        
        return item ? item.quantity : 0;
      }
} 