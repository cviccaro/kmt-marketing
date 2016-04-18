export class ProductVariation{
	constructor(
		public product_id: number,
		public lang: string,
		public size: string,
		public price: number,
		public extra: string,
		public id?: number
	) {}
}
