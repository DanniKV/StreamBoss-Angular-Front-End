import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']
})
export class ProductsAddComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    stock: new FormControl(''),
    picUrl: new FormControl('')
  });

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {

  }

  addProduct() {
    debugger;
    const product = this.productForm.value;
    debugger;
    this.productService.addProduct(product)
      .subscribe(product => {
        //this.router.navigateByUrl("/product")
      });
  }
}
