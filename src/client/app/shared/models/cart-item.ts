export class CartItem {
	constructor(
		public product_id: number,
		public variation_id: number,
		public description: string,
		public qty: number,
		public cost: number
	) {}
}
