import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../../shared/index';
import {ProductService} from '../../shared/index';
import {Product} from '../../shared/index';
import {OrderFormComponent} from './order-form.component';

@Component({
  selector: 'kmt-home',
  templateUrl: 'app/+home/components/home.component.html',
  styleUrls: ['app/+home/components/home.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, OrderFormComponent],
})
export class HomeComponent {
  newName: string;
  products: Product[];

  constructor(public productService: ProductService) {
    var o = this.productService.all();
    console.log(o);
    o.subscribe((products) => {
      this.products = products;
      console.log('got products', products);
    });
  }
}
