import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/products';
import {ProductService} from '../../shared/services/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../shared/services/category.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  categoryTitle: string;


  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
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
}
