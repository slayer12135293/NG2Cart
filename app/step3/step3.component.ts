import {Component, OnInit} from '@angular/core';
import{ProductsService} from '../service/products.service';
import{CartService} from '../service/cart.service';
import {IProduct,CartItem} from '../cart/cart';
import {ProgessBarComponent} from '../progressbar/progressbar.component';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';
import { FORM_DIRECTIVES ,FormBuilder,Validators,AbstractControl,Control,ControlGroup } from '@angular/common';
import { NgForm }    from '@angular/common';


@Component({
    templateUrl: 'app/step3/step3.component.html',
    directives:[ROUTER_DIRECTIVES, ProgessBarComponent,FORM_DIRECTIVES]
})
export class Step3Component implements OnInit{
    totalPrice:number = 0;
    currentCart: CartItem[];
    custForm : ControlGroup;
    

    
    constructor(private _cartService: CartService, 
    private _productService: ProductsService,
    private _builder: FormBuilder,
    private _router: Router){ 
       
        this.custForm = _builder.group(
            {
                "name": new Control("", Validators.compose([Validators.required, 
                Validators.minLength(5)])),
                "email": new Control("", Validators.compose([Validators.required]))
            }
        )
        
    }
    
    
    ngOnInit(){
        this.totalPrice = this._cartService.getTotalPrice();
        this.currentCart = this._productService.getProductsFromStorage();
        
    }
    
    
    onSubmit(value: any): void {  
        localStorage['userInfo'] = JSON.stringify(value); 
        this._router.navigate(['/step4']);
    }
    
    
}