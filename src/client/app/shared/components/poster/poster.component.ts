import {Component, AfterViewInit, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {Product, ProductVariation} from '../../../shared/index';

@Component({
	selector: 'kmt-poster',
	templateUrl: 'app/shared/components/poster/poster.component.html',
	styleUrls: ['app/shared/components/poster/poster.component.css']
})
export class PosterComponent implements AfterViewInit, OnInit {
	@Input() product: Product;

	@Output() qtyChange = new EventEmitter();

	public quantities = {};

	ngOnInit() {
		var ids = this.product.variations.map((variation) => {
			return variation.id;
		});
		ids.forEach(id => this.quantities[id] = '');
	}

	ngAfterViewInit() {
		console.log('PosterComponent view initialized.', this);
	}

	qtyChanged(variation: ProductVariation) {
		this.qtyChange.emit({
			product: this.product,
			variation: variation,
			qty: this.quantities[variation.id]
		});
	}
}
