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
    var Step1Component;
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
            Step1Component = (function () {
                function Step1Component(_productService, _cartService) {
                    this._productService = _productService;
                    this._cartService = _cartService;
                }
                Step1Component.prototype.ngOnInit = function () {
                    var _this = this;
                    this._productService.getProducts()
                        .subscribe(function (result) { return _this.products = result; }, function (error) { return _this.errorMessage = error; });
                    this.updateCart();
                };
                Step1Component.prototype.addToCart = function (item) {
                    var cartItem = {
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        quantity: 1,
                        price: item.price
                    };
                    this._cartService.addItem(cartItem);
                    this.updateCart();
                };
                Step1Component.prototype.updateCart = function () {
                    this.totalItems = this._cartService.getTotalItemCount();
                    this.totalPrice = this._cartService.getTotalPrice();
                };
                Step1Component = __decorate([
                    core_1.Component({
                        selector: 'list',
                        //template:`<h1>teaetw </h1>`
                        templateUrl: 'app/step1/step1.component.html',
                        directives: [progressbar_component_1.ProgessBarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [products_service_1.ProductsService, cart_service_1.CartService])
                ], Step1Component);
                return Step1Component;
            }());
            exports_1("Step1Component", Step1Component);
        }
    }
});
//# sourceMappingURL=step1.component.js.map