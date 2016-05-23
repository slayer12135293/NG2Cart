System.register(['@angular/core', '../service/products.service', '../service/cart.service', '../progressbar/progressbar.component', '@angular/router', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, products_service_1, cart_service_1, progressbar_component_1, router_1, common_1;
    var Step3Component;
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
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Step3Component = (function () {
                function Step3Component(_cartService, _productService, _builder, _router) {
                    this._cartService = _cartService;
                    this._productService = _productService;
                    this._builder = _builder;
                    this._router = _router;
                    this.totalPrice = 0;
                    this.custForm = _builder.group({
                        "name": new common_1.Control("", common_1.Validators.compose([common_1.Validators.required,
                            common_1.Validators.minLength(5)])),
                        "email": new common_1.Control("", common_1.Validators.compose([common_1.Validators.required]))
                    });
                }
                Step3Component.prototype.ngOnInit = function () {
                    this.totalPrice = this._cartService.getTotalPrice();
                    this.currentCart = this._productService.getProductsFromStorage();
                };
                Step3Component.prototype.onSubmit = function (value) {
                    localStorage['userInfo'] = JSON.stringify(value);
                    this._router.navigate(['/step4']);
                };
                Step3Component = __decorate([
                    core_1.Component({
                        templateUrl: 'app/step3/step3.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, progressbar_component_1.ProgessBarComponent, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [cart_service_1.CartService, products_service_1.ProductsService, common_1.FormBuilder, router_1.Router])
                ], Step3Component);
                return Step3Component;
            }());
            exports_1("Step3Component", Step3Component);
        }
    }
});
//# sourceMappingURL=step3.component.js.map