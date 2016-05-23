import {Injectable} from '@angular/core';
import {Cart,CartItem} from '../cart/cart';


@Injectable()
export class CartService {
    private cartExist(): boolean{
        if (localStorage['ng2leicart'] != null && localStorage['ng2leicart'] != undefined) {            
            if (localStorage['ng2leicart'] .length >1) {
                return true;
            }
        }
        return false;
    
     
    

    };
    
    private createEmptyCart(): void{
        localStorage['ng2leicart'] = [];
    };
    
    addItem(item: CartItem):void{
        if(!this.cartExist()){         
            this.createEmptyCart();
            let toCart = [];
            toCart.push(item);
            localStorage.setItem("ng2leicart", JSON.stringify(toCart));
        }else{
            let currentCartItems =  JSON.parse(localStorage.getItem("ng2leicart"));            
            let exist = false;
            for (let i = 0; i < currentCartItems.length; i++) {
                if (currentCartItems[i].id === item.id) {
                    currentCartItems[i].quantity += 1;    
                    exist = true;         
                }
            }
            if(exist == false){
                currentCartItems.push(item);
            }
            
            localStorage.setItem("ng2leicart", JSON.stringify(currentCartItems));
                
        }
    };
    removeItemById(id: number, removeall: boolean):void{     
        let currentCartItems =  JSON.parse(localStorage.getItem("ng2leicart")); 
        for (let i = 0; i < currentCartItems.length; i++) {
            if (currentCartItems[i].id === id) {
                if (removeall) {
                    currentCartItems.splice(i,1);                   
                }else{
                    if (currentCartItems[i].quantity === 1) {
                        currentCartItems.splice(i,1);  
                    }else{
                        currentCartItems[i].quantity -=1 ;
                    }
                    
                }
                localStorage.setItem("ng2leicart", JSON.stringify(currentCartItems));
                break;               
            }

        }
    };
    
    getTotalItemCount():number{
         if (!this.cartExist()) {
             return 0;
         }  
         let currentCartItems =  JSON.parse(localStorage.getItem("ng2leicart")); 
         let result=0;
         for (let i = 0; i < currentCartItems.length; i++) {
             result += currentCartItems[i].quantity;            
         }         
         return result;
    };
    
    getTotalPrice():number{
        if (!this.cartExist()) {
             return 0;
        }
        let currentCartItems =JSON.parse(localStorage.getItem("ng2leicart")); 
        let result=0;
        for (let i = 0; i < currentCartItems.length; i++) {
            result +=currentCartItems[i].price * currentCartItems[i].quantity;             
        }         
        return result;
    };
    
    emptyCart():void{
        localStorage.removeItem('ng2leicart');
    }
    
    
    
    
    
    
}
