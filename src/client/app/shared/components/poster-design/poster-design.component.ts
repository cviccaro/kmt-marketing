import {Component, Input, OnInit, AfterViewInit, Output, EventEmitter} from 'angular2/core';
import {Product, ProductVariation} from '../../index';

@Component({
	selector: 'kmt-poster-design',
	templateUrl: 'app/shared/components/poster-design/poster-design.component.html',
	styleUrls: ['app/shared/components/poster-design/poster-design.component.css']
})
export class PosterDesignComponent implements OnInit, AfterViewInit {
	@Input() product: Product;

	@Output() qtyChange = new EventEmitter();

	public quantities: = {};

	ngOnInit() {
		var ids = this.product.variations.map((variation) => {
			return variation.id;
		});
		ids.forEach(id => this.quantities[id] = '');
	}

	ngAfterViewInit() {
		console.log('PosterDesignComponent view initialized.', this);
	}

	qtyChanged(variation: ProductVariation) {
		this.qtyChange.emit({
			product: this.product,
			variation: variation,
			qty: this.quantities[variation.id]
		});
	}

}