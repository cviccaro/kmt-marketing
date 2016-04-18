export class ProductVariation{
	constructor(public product_id: number, public lang: string, public domestic: boolean, public price: number, public variation_id?: number) {
	}
}