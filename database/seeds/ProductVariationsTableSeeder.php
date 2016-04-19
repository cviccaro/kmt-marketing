<?php
namespace App;

use App\Product;
use App\ProductVariation;
use Illuminate\Database\Seeder;

class ProductVariationsTableSeeder extends Seeder {
	public function run() {
		$json = json_decode(file_get_contents(base_path() . '/database/seeds/product_variations.json'));

		foreach ($json as $variation) {
			$product = Product::where('title', $variation->product_name)->first();
			ProductVariation::create([
				'product_id' => $product->id,
				'lang' => $variation->lang,
				'size' => $variation->size,
				'price' => $variation->price,
				'extra' => $variation->extra,
			]);
		}
	}
}
