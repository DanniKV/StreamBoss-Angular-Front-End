import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/products';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
      .subscribe(prodFromRest => {
        this.product = prodFromRest;
      });
  }

}
