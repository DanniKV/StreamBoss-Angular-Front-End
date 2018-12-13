import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';


@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']
})
export class ProductsUpdateComponent implements OnInit {
  id: number;
  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    retailPrice: new FormControl(''),
    wholeSalePrice: new FormControl(''),
    category: new FormControl(''),
    stock: new FormControl(''),
    picUrl: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id)
      .subscribe(prodFromRest => {
        this.productForm.patchValue( {
          name: prodFromRest.name,
          description: prodFromRest.description,
          retailPrice: prodFromRest.retailPrice,
          wholeSalePrice: prodFromRest.wholeSalePrice,
          category: prodFromRest.category,
          stock: prodFromRest.stock,
          picUrl: prodFromRest.picUrl
        });
      });
  }
  saveProduct() {
    const prod = this.productForm.value;
    prod.id = this.id;
    this.productService.updateProduct(prod)
      .subscribe(productUpdated => {
      });
  }

}
