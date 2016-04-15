export class Product {
	constructor(
		public title: string,
		public type: string,
		public category: string,
		public image: string,
		public lang: string,
		public domestic: boolean,
		public price: number,
		public id?: number
	) {	}
}
