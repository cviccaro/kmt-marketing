import {Product, ProductVariation} from '../index';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
	all(type?: string) : Observable<any> {
		var products: Product[] = [
			new Product('Beyond Evolution Overview Poster', 'poster', 'Beyond Evolution Posters', '', 500, false, 1),
			new Product('Beyond Evolution EASY Poster - Surface Finish', 'poster', 'Beyond Evolution Posters', '', 600, false, 2),
			new Product('Beyond Evolution EASY Poster - Saving Money', 'poster', 'Beyond Evolution Posters', '', 750, false, 3),
			new Product('Beyond Evolution EASY Poster - Productivity', 'poster', 'Beyond Evolution Posters', '', 900, false, 4),
			new Product('Ethics Poster', 'poster_design', 'Corporate Poster Designs', '', 1000, false, 5),
			new Product('CIO100 Award Poster', 'poster_design', 'Corporate Poster Designs', '', 1000, false, 6),
			new Product('Beyond Evolution DVD', 'video', 'Beyond Evolution Video', '', 425, false, 7),
			new Product('Beyond Evolution Video File', 'video', 'Beyond Evolution Video', '', 0, 'Download Here for FREE', 8),
		];

		if (type) {
			products = products.filter((product) => product.type === type);
		}

		return Observable.create((observer) => {
			observer.next(products);
		});
	}

	variations(product: Product) : Observable<any> {
		let variations: ProductVariation[];
		const product_id = product.id;
		let i = product_id * 100;

		if (product.type === 'poster_design') {
			variations = [
				new ProductVariation(product_id, 'English', 'US Standard', 500, false, i++),
				new ProductVariation(product_id, 'English', 'International Standard', 600, false, i++),
			];
		} else if (product.type === 'video') {
			if (product.title === 'Beyond Evolution Video File') {
				variations = [
					new ProductVariation(product_id, 'English', '', 425, 'save link as?', i++)
				];
			} else {
				variations = [
					new ProductVariation(product_id, 'English', '', 425, false, i++)
				];
			}
		} else if (product.type === 'poster') {
			variations = [
				new ProductVariation(product_id, 'English', 'US Standard', 500, false, i++),
				new ProductVariation(product_id, 'English', 'International Standard', 600, false, i++),
				new ProductVariation(product_id, 'German', 'US Standard', 500, false, i++),
				new ProductVariation(product_id, 'German', 'International Standard', 600, false, i++),
				new ProductVariation(product_id, 'Italian', 'US Standard', 500, false, i++),
				new ProductVariation(product_id, 'Italian', 'International Standard', 600, false, i++),
				new ProductVariation(product_id, 'Polish', 'US Standard', 500, false, i++),
				new ProductVariation(product_id, 'Polish', 'International Standard', 600, false, i++),
				new ProductVariation(product_id, 'Portuguese', 'US Standard', 500, false, i++),
				new ProductVariation(product_id, 'Portuguese', 'International Standard', 600, false, i++),
				new ProductVariation(product_id, 'Chinese', 'US Standard', 500, false, i++),
				new ProductVariation(product_id, 'Chinese', 'International Standard', 600, false, i++),
			];
		}

		return Observable.create((observer) => {
			observer.next(variations);
		});
	}
}
