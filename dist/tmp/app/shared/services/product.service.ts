import {Product} from '../models/product';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
	all() : Observable<any> {
		var products: Product[] = [
			new Product('Beyond Evolution Overview Poster', 'poster', 'Beyond Evolution Posters', '', 'eng', true, 5000, 1),
			new Product('Beyond Evolution EASY Poster - Surface Finish', 'poster', 'Beyond Evolution Posters', '', 'eng', true, 6000, 2),
			new Product('Beyond Evolution EASY Poster - Saving Money', 'poster', 'Beyond Evolution Posters', '', 'eng', true, 7500, 3),
			new Product('Beyond Evolution EASY Poster - Productivity', 'poster', 'Beyond Evolution Posters', '', 'eng', true, 9000, 4),
		];

		return Observable.create((observer) => {
			observer.next(products);
		});
	}
}
