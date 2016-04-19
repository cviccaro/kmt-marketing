import {Component, AfterViewInit, Input, OnInit} from 'angular2/core';
import {CartItem} from '../../index';

@Component({
	selector: 'kmt-cart',
	templateUrl: 'app/shared/components/cart/cart.component.html',
	styleUrls: ['app/shared/components/cart/cart.component.css']
})

export class CartComponent implements AfterViewInit, OnInit {
	@Input() cart: CartItem[];

	public cartTotal = 0;

	ngOnInit() {
		this.updateTotal();
	}

	ngAfterViewInit() {
		console.log('CartComponent view initialized.', this);
	}

	public updateTotal() {
		if (this.cart !== undefined && this.cart.length) {
			this.cartTotal = this.cart
				.map(item => item.cost * item.qty / 100)
				.reduce((prev, val, index) => prev + val);
		}
	}
}
