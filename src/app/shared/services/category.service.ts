import {Product} from '../models/products';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  apiUrl = 'https://streamboss.azurewebsites.net/api/category';


  constructor(private http: HttpClient) {

  }

  /**
   * Gets the database products with the given category.
   * @param category
   */
  getCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/' + category);
  }
}
