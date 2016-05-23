System.register(['@angular/core', '../service/products.service', '../service/cart.service', '../progressbar/progressbar.component', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, products_service_1, cart_service_1, progressbar_component_1, router_1;
    var Step4Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (products_service_1_1) {
                products_service_1 = products_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (progressbar_component_1_1) {
                progressbar_component_1 = progressbar_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Step4Component = (function () {
                function Step4Component(_productService, _cartService, _router) {
                    this._productService = _productService;
                    this._cartService = _cartService;
                    this._router = _router;
                }
                Step4Component.prototype.ngOnInit = function () {
                    this.cartItems = this._productService.getProductsFromStorage();
                    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
                    this.totalPrice = this._cartService.getTotalPrice();
                };
                Step4Component.prototype.finishShopping = function () {
                    this._cartService.emptyCart();
                    localStorage.removeItem('userInfo');
                    alert("Good luck slaying the dragon!");
                    this._router.navigate(['/step1']);
                };
                Step4Component = __decorate([
                    core_1.Component({
                        templateUrl: "app/step4/step4.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES, progressbar_component_1.ProgessBarComponent],
                    }), 
                    __metadata('design:paramtypes', [products_service_1.ProductsService, cart_service_1.CartService, router_1.Router])
                ], Step4Component);
                return Step4Component;
            }());
            exports_1("Step4Component", Step4Component);
        }
    }
});
//# sourceMappingURL=step4.component.js.map