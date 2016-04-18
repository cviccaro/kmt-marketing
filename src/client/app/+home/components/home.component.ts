import {Component, ViewChild} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {ProductService, Product, ProductVariation, ProductComponent} from '../../shared/index';
import {OrderFormComponent} from './order-form.component';

@Component({
  selector: 'kmt-home',
  templateUrl: 'app/+home/components/home.component.html',
  styleUrls: ['app/+home/components/home.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, OrderFormComponent, ProductComponent],
})
export class HomeComponent {
  newName: string;
  posters: Product[];
  posterDesigns: Product[];
  videos: Product[];

  @ViewChild('orderForm') orderForm: OrderFormComponent;

  constructor(public productService: ProductService) {
    this.productService.all().subscribe((products) => {
      this.setProducts('poster', 'posters', products);
      this.setProducts('poster_design', 'posterDesigns', products);
      this.setProducts('video', 'videos', products);
      console.log(this);
    });
  }

  getVariations(products: Product[]) {
    products.forEach((product) => {
      this.productService.variations(product).subscribe((variations) => {
        product.variations = variations;
      });
    });
  }

  setProducts(type: string, propName: string, products: Product[]) {
    this[propName] = products.filter(product => product.type === type);
    this.getVariations(this[propName]);
  }

  qtyChange(opts: {product: Product, variation: ProductVariation, qty: number}) {
    console.log('qtyChange()', opts, this);
    this.orderForm.updateCart(opts.product, opts.variation, opts.qty);
  }
}
