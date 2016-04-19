import {Injectable, Injector, OpaqueToken} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import {Product, ProductVariation, API_CONFIG, IApiConfig} from '../index';

@Injectable()
export class ProductService {
	config: IApiConfig;

	constructor(private _injector: Injector, public http: Http) { 
		this.config = this._injector.get(API_CONFIG);
	}
	all(type?: string): Observable<any> {
		return this.http.get(this.config.url + '/products')
			.map(res => res.json())
			.map((res) => res.map((product: Product) => {
					var productInstance = new Product(product.title, product.type, product.category, product.image, product.price, product.customHeader, product.id);
					productInstance.variations = product.variations.map((v: ProductVariation) => new ProductVariation(v.product_id, v.lang, v.size, v.price, v.extra, v.id));
					return productInstance;
				})
			);
	}
}
