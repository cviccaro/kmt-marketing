<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductVariationsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('product_variations', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('product_id');
			$table->string('lang')->nullable();
			$table->string('size')->nullable();
			$table->integer('price')->nullable();
			$table->string('extra')->nullable();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('product_variations');
	}
}
