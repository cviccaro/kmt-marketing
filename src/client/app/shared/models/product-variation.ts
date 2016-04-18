export class ProductVariation {
	constructor(
		public product_id: number,
		public lang: string,
		public size: string,
		public price: number,
		public extra: any = false,
		public id?: number
	) {}

	description() {
		var str = this.lang;
		if (this.size) {
			str += ' &mdash; ' + this.size;
		}
		return str;
	}
}
