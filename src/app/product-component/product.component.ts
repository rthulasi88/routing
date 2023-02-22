import { Component, OnInit } from '@angular/core';

import { ProductService } from '../Service/ProductService';
import {Product} from '../Models/Product'

@Component({
  templateUrl: './product.component.html',
})

export class ProductComponent
{

   products: Product[] | undefined;

  constructor(private productService:ProductService){
  }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}

