import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {IProduct} from '../cart/cart';

@Injectable()
export class ProductsService{
    private _productUrl = "app/api/products.json";
    
    constructor(private _http: Http){}
    
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .catch(this.handleError);
        
    }

    private _allProducts: IProduct[];
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    getProductsFromStorage() {
       
      return JSON.parse(localStorage.getItem("ng2leicart"));
                    
        
    }
    
    
    
     
}