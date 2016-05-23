System.register(['@angular/core', '@angular/router', './progressbar/progressbar.component', '@angular/http', 'rxjs/Rx', './service/cart.service', './step1/step1.component', './step2/step2.component', './step3/step3.component', './step4/step4.component', './service/products.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, progressbar_component_1, http_1, cart_service_1, step1_component_1, step2_component_1, step3_component_1, step4_component_1, products_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (progressbar_component_1_1) {
                progressbar_component_1 = progressbar_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (step1_component_1_1) {
                step1_component_1 = step1_component_1_1;
            },
            function (step2_component_1_1) {
                step2_component_1 = step2_component_1_1;
            },
            function (step3_component_1_1) {
                step3_component_1 = step3_component_1_1;
            },
            function (step4_component_1_1) {
                step4_component_1 = step4_component_1_1;
            },
            function (products_service_1_1) {
                products_service_1 = products_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this.pageTitle = "Leis Super Store";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'cart-app',
                        template: "\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12 banner\">\n                    Lei's Item Store - Sweeter than donuts!\n                </div>                \n            </div>\n        </div>\n        <router-outlet></router-outlet>       \n    ",
                        styleUrls: ['app/app.component.css'],
                        providers: [cart_service_1.CartService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, products_service_1.ProductsService],
                        directives: [progressbar_component_1.ProgessBarComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.Routes([
                        { path: '/', component: step1_component_1.Step1Component },
                        { path: '/step1', component: step1_component_1.Step1Component },
                        { path: '/step2', component: step2_component_1.Step2Component },
                        { path: '/step3', component: step3_component_1.Step3Component },
                        { path: '/step4', component: step4_component_1.Step4Component }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map