import {Component, OnInit} from '@angular/core';
import{ProductsService} from '../service/products.service';
import{CartService} from '../service/cart.service';
import {IProduct,CartItem} from '../cart/cart';
import {ProgessBarComponent} from '../progressbar/progressbar.component';

import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
   selector:'list',
   //template:`<h1>teaetw </h1>`
   
   templateUrl:'app/step1/step1.component.html'   ,
   directives:[ProgessBarComponent,ROUTER_DIRECTIVES] 
})
export class Step1Component implements OnInit{
    totalItems : number;
    totalPrice: number;
    products: IProduct[];
    errorMessage: string;
    
    constructor(private _productService: ProductsService, private _cartService :CartService){}
    
    ngOnInit(){
        this._productService.getProducts()
        .subscribe(result=> this.products = result,
        error => this.errorMessage = error);
        this.updateCart();
    }
    
    addToCart(item:IProduct):void{
        let cartItem:CartItem =  {
            id: item.id,
            name: item.name,
            image: item.image,
            quantity: 1,
            price: item.price   
        }        
        this._cartService.addItem(cartItem);
       
        this.updateCart();
  
    }
    
    private updateCart(): void{
        this.totalItems = this._cartService.getTotalItemCount();
        this.totalPrice = this._cartService.getTotalPrice();
    }
    
}