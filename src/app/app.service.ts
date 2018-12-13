import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";
import { stringify } from 'querystring';


@Injectable()
export class AppService {

  public url = 'http://localhost:3000';
  // private url ='http://tracking-node.akshaypatil.online';
  public fixerUrl = 'http://free.currencyconverterapi.com/api/v5/';
  public historicUrl = "https://data.fixer.io/api/"


  constructor(public http: HttpClient) {}


// get exchange rates
public getRates(from, to) {
  
  let response = this.http.get(`${this.fixerUrl}convert?q=${from}_${to}&compact=y`);

  return response;

}




 //Store data 
 public storeData(data): Observable<any> {

  const params = new HttpParams()
    .set('name', data.name)
    .set('price', data.price)
   

  return this.http.post(`${this.url}/api/v1/product/create`, params);

} // end of Store data function.


  //get product details
  public getProduct(id) {

    let response = this.http.get(`${this.url}/api/v1/product/${id}/view`);

    return response;

  }


  
  //get all Product
  public getAllProduct() {

    let response = this.http.get(`${this.url}/api/v1/product/all`);

    return response;

  }


}