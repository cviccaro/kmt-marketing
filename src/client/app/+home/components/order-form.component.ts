import {Component} from 'angular2/core';
import {NgForm, Control, ControlGroup, Validators, CurrencyPipe} from 'angular2/common';
import {Submission, Product, ProductVariation, CartItem} from '../../shared/index';

@Component({
	selector: 'kmt-order-form',
	templateUrl: 'app/+home/components/order-form.component.html',
	styleUrls: ['app/+home/components/order-form.component.css'],
	pipes: [CurrencyPipe]
})
export class OrderFormComponent {
	public cartTotal = 0;

	public submission: Submission = new Submission();

	ngAfterViewInit() {
		console.log('OrderFormComponent view initialized.', this);
	}

	formIsValid(orderForm: NgForm) {
		return orderForm.form.valid && this.submission.cart.length != 0;
	}

	onSubmit() {
		console.log('on submit!', this);
	}

	updateTotal() {
		if (this.submission.cart.length) {
			this.cartTotal = this.submission.cart
				.map(item => return item.cost * item.qty / 100)
				.reduce((prev, val, index) => return prev + val));
		}
	}

	public updateCart(product: Product, v: ProductVariation, qty: number) {
		console.log('orderForm.updateCart() called with', {
			product: product,
			variation: v,
			qty: qty
		});
		const desc = `${product.title} - ${v.lang} - ${v.size}`;
		const inCart = this.submission.cart.filter((item) => item.product_id === product.id && item.variation_id === v.id);
		if (inCart.length) {
			const index = this.submission.cart.indexOf(inCart[0]);
			if (qty === 0) {
				this.submission.cart.splice(index);
			} else {
				this.submission.cart[index] = new CartItem(product.id, v.id, desc, qty, v.price);
			}
		} else if (qty > 0) {
			this.submission.cart.push(new CartItem(product.id, v.id, desc, qty, v.price));
		}
		this.updateTotal();
	}

}
