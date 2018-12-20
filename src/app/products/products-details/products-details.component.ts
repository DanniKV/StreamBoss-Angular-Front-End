import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/products';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  /**
   * On initializing the page, the "id" is taken from the URL
   * and then sent to the product service, where it will then
   * fill in the details from the returned object.
   */
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
      .subscribe(prodFromRest => {
        this.product = prodFromRest;
      });
  }

}
