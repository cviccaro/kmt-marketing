<?php

use App\ProductsTableSeeder;
use App\ProductVariationsTableSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		$this->call(ProductsTableSeeder::class);
		$this->call(ProductVariationsTableSeeder::class);
	}
}
