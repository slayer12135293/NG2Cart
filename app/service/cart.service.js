System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var CartService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CartService = (function () {
                function CartService() {
                }
                CartService.prototype.cartExist = function () {
                    if (localStorage['ng2leicart'] != null && localStorage['ng2leicart'] != undefined) {
                        if (localStorage['ng2leicart'].length > 1) {
                            return true;
                        }
                    }
                    return false;
                };
                ;
                CartService.prototype.createEmptyCart = function () {
                    localStorage['ng2leicart'] = [];
                };
                ;
                CartService.prototype.addItem = function (item) {
                    if (!this.cartExist()) {
                        this.createEmptyCart();
                        var toCart = [];
                        toCart.push(item);
                        localStorage.setItem("ng2leicart", JSON.stringify(toCart));
                    }
                    else {
                        var currentCartItems = JSON.parse(localStorage.getItem("ng2leicart"));
                        var exist = false;
                        for (var i = 0; i < currentCartItems.length; i++) {
                            if (currentCartItems[i].id === item.id) {
                                currentCartItems[i].quantity += 1;
                                exist = true;
                            }
                        }
                        if (exist == false) {
                            currentCartItems.push(item);
                        }
                        localStorage.setItem("ng2leicart", JSON.stringify(currentCartItems));
                    }
                };
                ;
                CartService.prototype.removeItemById = function (id, removeall) {
                    var currentCartItems = JSON.parse(localStorage.getItem("ng2leicart"));
                    for (var i = 0; i < currentCartItems.length; i++) {
                        if (currentCartItems[i].id === id) {
                            if (removeall) {
                                currentCartItems.splice(i, 1);
                            }
                            else {
                                if (currentCartItems[i].quantity === 1) {
                                    currentCartItems.splice(i, 1);
                                }
                                else {
                                    currentCartItems[i].quantity -= 1;
                                }
                            }
                            localStorage.setItem("ng2leicart", JSON.stringify(currentCartItems));
                            break;
                        }
                    }
                };
                ;
                CartService.prototype.getTotalItemCount = function () {
                    if (!this.cartExist()) {
                        return 0;
                    }
                    var currentCartItems = JSON.parse(localStorage.getItem("ng2leicart"));
                    var result = 0;
                    for (var i = 0; i < currentCartItems.length; i++) {
                        result += currentCartItems[i].quantity;
                    }
                    return result;
                };
                ;
                CartService.prototype.getTotalPrice = function () {
                    if (!this.cartExist()) {
                        return 0;
                    }
                    var currentCartItems = JSON.parse(localStorage.getItem("ng2leicart"));
                    var result = 0;
                    for (var i = 0; i < currentCartItems.length; i++) {
                        result += currentCartItems[i].price * currentCartItems[i].quantity;
                    }
                    return result;
                };
                ;
                CartService.prototype.emptyCart = function () {
                    localStorage.removeItem('ng2leicart');
                };
                CartService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CartService);
                return CartService;
            }());
            exports_1("CartService", CartService);
        }
    }
});
//# sourceMappingURL=cart.service.js.map