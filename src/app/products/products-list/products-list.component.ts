import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/products';
import {ProductService} from '../../shared/services/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../shared/services/category.service';
import {OrderByPipe} from '../../shared/order-by.pipe';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  productsSorted: Product[];
  categoryTitle: string;
  sortBy = 'category';
  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    // gets all products.
    this.categoryTitle = 'Alle Produkter';
    this.productService.getProducts()
      .subscribe(listOfProducts => {
        this.products = listOfProducts;
      });
  }
  refresh() {
    this.products = this.productsSorted;
  }
  getCategory(category: string) {
    // gets the selected category of items.
    this.categoryTitle = category;
    this.categoryService.getCategory(category)
      .subscribe( catProducts => {
        this.products = catProducts;
      });
  }
  sort() {
    // Sorts the list from the current list of products with the given search parameters from the dropbox.
    this.sortBy = (<HTMLSelectElement>document.getElementById('sortByValue')).value;
    this.productsSorted = this.products;
    this.refresh();
  }



}
