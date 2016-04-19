<?php
namespace App;

use App\Product;
use Illuminate\Database\Seeder;

// composer require laracasts/testdummy

class ProductsTableSeeder extends Seeder {
	public function run() {
		$json = json_decode(file_get_contents(base_path() . '/database/seeds/products.json'));
		foreach ($json as $product) {
			Product::create((array) $product);
		}
	}
}
