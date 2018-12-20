import {Product} from '../models/products';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  apiUrl = 'https://streamboss.azurewebsites.net/api/product';


  constructor(private http: HttpClient) {
  }

  /**
   * Sends a HTTP Post request to the API with the given product in JSON format.
   * @param product
   */
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  /**
   * Sends a HTTP Get request with the parameter of Id
   * @param id
   */
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/' + id);
  }

  /**
   * Sends a HTTP Get request that returns a list of products.
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/');
  }

  /**
   * Sends a HTTP Put request with the given product information
   * and also the Id of which product to update.
   * @param product
   */
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.apiUrl + '/' + product.id, product);
  }

  /**
   * Sends a HTTP Delete request with the given Id to delete.
   * @param id
   */
  deleteProduct(id: any): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

}
