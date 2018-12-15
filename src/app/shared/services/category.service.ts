import {Product} from '../models/products';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  apiUrl = 'https://streamboss.azurewebsites.net/api/category';
  //apiUrl = 'http://localhost:64357/api/product'; //Postman Port


  constructor(private http: HttpClient) {

  }
  getCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + "/" + category);
  }
}
