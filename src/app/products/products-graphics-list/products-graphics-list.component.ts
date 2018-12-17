import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {CategoryService} from '../../shared/services/category.service';
import {Router} from '@angular/router';
import {Product} from '../../shared/models/products';

@Component({
  selector: 'app-products-graphics-list',
  templateUrl: './products-graphics-list.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']
})
export class ProductsGraphicsListComponent implements OnInit {

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) { }

  products: Product[];
  categoryTitle: string;

  ngOnInit() {
    //KALD PÅ FUNKTION TIL AT HENTE 2 Kategorier
  }

  getCategory(category: string) {
    this.categoryTitle = category;
    this.categoryService.getCategory(category)
      .subscribe( graphProducts => {
        this.products = graphProducts;

      });
    //MANGLER FUNKTION TIL AT HENTE 2 Kategorier
  }

}
