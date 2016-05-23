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
    var Step2Component;
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
            Step2Component = (function () {
                function Step2Component(_cartService, _productsService) {
                    this._cartService = _cartService;
                    this._productsService = _productsService;
                }
                Step2Component.prototype.ngOnInit = function () {
                    this.viewUpdate();
                };
                Step2Component.prototype.addItem = function (item) {
                    this._cartService.addItem(item);
                    this.viewUpdate();
                };
                Step2Component.prototype.viewUpdate = function () {
                    this.totalPrice = this._cartService.getTotalPrice();
                    this.cartItems = this._productsService.getProductsFromStorage();
                };
                Step2Component.prototype.removeItem = function (id, all) {
                    this._cartService.removeItemById(id, all);
                    this.viewUpdate();
                };
                Step2Component = __decorate([
                    core_1.Component({
                        templateUrl: 'app/step2/step2.component.html',
                        directives: [progressbar_component_1.ProgessBarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [cart_service_1.CartService, products_service_1.ProductsService])
                ], Step2Component);
                return Step2Component;
            }());
            exports_1("Step2Component", Step2Component);
        }
    }
});
//# sourceMappingURL=step2.component.js.map