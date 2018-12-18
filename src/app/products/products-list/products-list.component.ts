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
  categoryTitle: string;
  sortBy: string;
  sortForm = new FormGroup({
    sortName: new FormControl(''),
  });
  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.sortBy = 'retailPrice';
    this.refresh();
  }
  Page = 1;
  Items = 6;

  next() {
    this.productService.pageIncrement();
    this.Page ++;
    this.router.navigateByUrl("/products"
      + '?CurrentPage=' + this.Page + '&ItemsPerPage=' + this.Items);
    this.refresh();
  }
  prev() {
    this.productService.pageDecrement();
    this.Page --;
    this.router.navigateByUrl("/products"
      + '?CurrentPage=' + this.Page + '&ItemsPerPage=' + this.Items);
  this.refresh();
  }

  refresh() {
    this.categoryTitle = 'Alle Produkter';
    this.productService.getProducts()
      .subscribe(listOfProducts => {
        this.products = listOfProducts;
      });
  }

  getCategory(category: string) {
    this.categoryTitle = category;
    this.categoryService.getCategory(category)
      .subscribe( catProducts => {
        this.products = catProducts;
      });
  }
  sort() {
    this.sortBy = this.sortForm.value;
  }
}
