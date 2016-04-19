import {Component, ViewChild, AfterViewInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {ProductService, Product, ProductVariation, ProductComponent} from '../../shared/index';
import {OrderFormComponent} from './order-form.component';

@Component({
  selector: 'kmt-home',
  templateUrl: 'app/+home/components/home.component.html',
  styleUrls: ['app/+home/components/home.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, OrderFormComponent, ProductComponent]
})
export class HomeComponent implements AfterViewInit {
  posters: Product[];
  posterDesigns: Product[];
  videos: Product[];

  @ViewChild('orderForm') orderForm: OrderFormComponent;

  constructor(public productService: ProductService) {
    this.productService.all().subscribe((products) => {
      console.log('got products: ', products);
      this.posters = products.filter((product: Product) => product.type === 'poster');
      this.posterDesigns = products.filter((product: Product) => product.type === 'poster_design');
      this.videos = products.filter((product: Product) => product.type === 'video');
    });
  }
  
  ngAfterViewInit() {
    console.log('HomeComponent View initialized.', this);
  }

  qtyChange(opts: {product: Product, variation: ProductVariation, qty: number}) {
    this.orderForm.updateCart(opts.product, opts.variation, opts.qty);
  }
}
