import {Component, OnInit} from '@angular/core';
import{ProductsService} from '../service/products.service';
import{CartService} from '../service/cart.service';
import {IProduct,CartItem} from '../cart/cart';
import {ProgessBarComponent} from '../progressbar/progressbar.component';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    templateUrl : 'app/step2/step2.component.html',
    directives:[ProgessBarComponent,ROUTER_DIRECTIVES] 

})
export class Step2Component implements OnInit {
    constructor(private _cartService: CartService, private _productsService: ProductsService){}
    cartItems : IProduct[];
    totalPrice: number;
    
    ngOnInit(){
        this.viewUpdate();       
    }
    
    addItem(item: CartItem):void{
        this._cartService.addItem(item);
        this.viewUpdate();    
    }
    
    
    private viewUpdate():void{        
        this.totalPrice = this._cartService.getTotalPrice();
        this.cartItems = this._productsService.getProductsFromStorage();        
    }
    
    removeItem(id: number, all:boolean): void{        
        this._cartService.removeItemById(id, all);
        this.viewUpdate();
        
    }
    
    
    
    
}