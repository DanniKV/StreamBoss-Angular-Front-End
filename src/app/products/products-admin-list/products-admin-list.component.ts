import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/products';
import {ProductService} from '../../shared/services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-admin-list',
  templateUrl: './products-admin-list.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']
})
export class ProductsAdminListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.refresh()
  }

  delete(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(message => {
        this.refresh();
      });
  }

  refresh() {
    this.productService.getProducts()
      .subscribe(listOfProducts => {
        this.products = listOfProducts;
      });
  }
}
