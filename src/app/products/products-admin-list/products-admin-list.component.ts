import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/products';
import {ProductService} from '../../shared/services/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../shared/services/category.service';

@Component({
  selector: 'app-products-admin-list',
  templateUrl: './products-admin-list.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']
})
export class ProductsAdminListComponent implements OnInit {
  products: Product[];
  categoryTitle: string;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  /**
   * Gets the products with the given category in the parameter.
   * @param category
   */
  getCategory(category: string) {
    this.categoryTitle = category;
    this.categoryService.getCategory(category)
      .subscribe( catProducts => {
        this.products = catProducts;
    });
  }

  /**
   * Gets all products from the database.
   */
  getAllProducts() {
    this.categoryTitle = 'Alle Produkter';
    this.productService.getProducts()
      .subscribe(listOfProducts => {
        this.products = listOfProducts;
      });
  }
}
