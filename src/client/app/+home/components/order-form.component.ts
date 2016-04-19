import {Component, ViewChild} from 'angular2/core';
import {NgForm, CurrencyPipe} from 'angular2/common';
import {Router} from 'angular2/router';
import {Submission, Product, ProductVariation, CartItem, SubmissionService, CartComponent} from '../../shared/index';

@Component({
	selector: 'kmt-order-form',
	templateUrl: 'app/+home/components/order-form.component.html',
	styleUrls: ['app/+home/components/order-form.component.css'],
	directives: [CartComponent],
	pipes: [CurrencyPipe]
})
export class OrderFormComponent {
	public submission: Submission = new Submission();

	@ViewChild('cart') cart: CartComponent;

	constructor(private _router: Router, private _submissionService: SubmissionService) { }

	ngAfterViewInit() {
		console.log('OrderFormComponent view initialized.', this);
	}

	formIsValid(orderForm: NgForm) {
		return orderForm.form.valid && this.submission.cart.length !== 0;
	}

	onSubmit() {
		this._submissionService.submit(this.submission).subscribe((res) => {
			this._router.navigate(['Finish']);
		}, (errors) => {
			console.log("onSubmit returned an error.", errors);
		});
	}
	
	public updateCart(product: Product, v: ProductVariation, qty: number) {
		let desc = `${product.title} - ${v.lang}`;
		if (v.size) { desc += ` - ${v.size}`; }

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
		
		this.cart.updateTotal();
	}

}
