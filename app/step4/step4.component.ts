
import {Component, OnInit} from '@angular/core';
import{ProductsService} from '../service/products.service';
import{CartService} from '../service/cart.service';
import {IProduct,CartItem} from '../cart/cart';
import {ProgessBarComponent} from '../progressbar/progressbar.component';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    templateUrl:"app/step4/step4.component.html",
    directives:[ROUTER_DIRECTIVES,ProgessBarComponent],
    
    
})
export class Step4Component implements OnInit {
    cartItems: CartItem[];
    userInfo:any;    
    totalPrice: number;
    
    constructor(private _productService: ProductsService, 
    private _cartService:CartService,
    private _router:Router){}    
        
    ngOnInit(){
        this.cartItems = this._productService.getProductsFromStorage();
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.totalPrice = this._cartService.getTotalPrice();
    }
    
    
    finishShopping(){
        this._cartService.emptyCart();
        localStorage.removeItem('userInfo');
        alert("Good luck slaying the dragon!");
        this._router.navigate(['/step1']);
    }
}