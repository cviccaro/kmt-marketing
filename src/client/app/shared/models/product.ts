import {ProductVariation} from '../index';

export class Product {
	public variations: ProductVariation[];
	
	constructor(
		public title: string,
		public type: string,
		public category: string,
		public image: string,
		public price: number,
		public id?: number
	) {	}
}
