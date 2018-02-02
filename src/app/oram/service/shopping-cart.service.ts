import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Product } from '../models/product';
import 'rxjs/add/operator/take';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable()
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { }

  private create(){
    return this.db.list('/shopping-carts/').push({
      dataCreated : new Date().getTime()
    });
  }

  async getCart(): Promise<FirebaseObjectObservable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    //console.log('getCart cartId', cartId);
    return this.db.object('/shopping-carts/' + cartId);
  }

  private async getOrCreateCartId(): Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId
    
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
    
  }
  private getItem(cartId: string, productId: string){
    return this.db.object('shopping-carts/'+ cartId + '/items/' + productId);
  }

  async addToCart(product:Product){
    this.updateItemQuality(product, 1);
  }
  async removeFromCart(product:Product){
    this.updateItemQuality(product, -1)
  }
  private async updateItemQuality(product:Product, change:number){
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
      item$.update({
        product:product, 
        quantity : (item.quantity || 0) + change
       });
    })
  }

}
