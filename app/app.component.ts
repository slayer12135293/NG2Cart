import {Component, OnInit} from '@angular/core';
import { Routes,Router, ROUTER_DIRECTIVES,ROUTER_PROVIDERS } from '@angular/router';
import {ProgessBarComponent} from  './progressbar/progressbar.component';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features

import {CartService} from './service/cart.service';
import {Step1Component} from './step1/step1.component';
import {Step2Component} from './step2/step2.component';
import {Step3Component} from './step3/step3.component';
import {Step4Component} from './step4/step4.component';
import {ProductsService} from './service/products.service';


@Component({
    selector: 'cart-app',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-12 banner">
                    Lei's Item Store - Sweeter than donuts!
                </div>                
            </div>
        </div>
        <router-outlet></router-outlet>       
    `,
    styleUrls:['app/app.component.css'],
    providers:[CartService, HTTP_PROVIDERS,ROUTER_PROVIDERS,ProductsService],
    directives:[ProgessBarComponent, ROUTER_DIRECTIVES]
    
})

@Routes([
    { path: '/', component: Step1Component },
    { path: '/step1', component: Step1Component },
    { path: '/step2', component: Step2Component },
    { path: '/step3', component: Step3Component },
    { path: '/step4', component: Step4Component }
])
export class AppComponent {

    pageTitle: string ="Leis Super Store";     
    constructor(private _router: Router){}    
    


}


