import {Component, Input, Output, EventEmitter, OnInit, AfterViewInit} from 'angular2/core';
import {Product, ProductVariation} from '../../index';

@Component({
	selector: 'kmt-product',
	templateUrl: 'app/shared/components/product/product.component.html',
	styleUrls: ['app/shared/components/product/product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {
	@Input() product: Product;
	@Output() qtyChange = new EventEmitter();

	public quantities = {};
	public customHeader: any = false;

	ngOnInit() {
		if (this.product.customHeader) {
			this.customHeader = this.product.customHeader;
		}
		var ids = this.product.variations.map((variation) => {
			return variation.id;
		});
		ids.forEach(id => this.quantities[id] = '');
	}

	ngAfterViewInit() {
		console.log('ProductComponent view initialized.', this);
	}

	qtyChanged(variation: ProductVariation) {
		this.qtyChange.emit({
			product: this.product,
			variation: variation,
			qty: this.quantities[variation.id]
		});
	}
}
