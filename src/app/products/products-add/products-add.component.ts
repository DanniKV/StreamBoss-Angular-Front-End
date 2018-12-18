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
    retailPrice: new FormControl(''),
    wholeSalePrice: new FormControl(''),
    category: new FormControl(''),
    stock: new FormControl(''),
    picUrl: new FormControl('')   //-GIVES BIG ERROR MESSAGE CAUSE IT DOESNT EXIST IN THE HTML
  });


  constructor(private productService: ProductService,
              private router: Router) {
  }
  ngOnInit() {

  }
  label= '';

  addProduct() {
    const product = this.productForm.value;
    this.productService.addProduct(product)
      .subscribe(product => {
        this.router.navigateByUrl("/product");
      });
  }
  submitLabel() {
  this.label = 'Submittet!';
  }
  resetLabel() {
    this.label = 'Reset!'
  }
}
