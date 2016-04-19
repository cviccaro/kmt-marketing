<?php

use App\Product;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
 */

Route::get('/', function () {
	$json = json_decode(file_get_contents(base_path() . '/database/seeds/product_variations.json'));
	$product = Product::where('title', $json[0]->product_name)->first();
	dd(array('json' => $json, 'product' => $product));
	return view('welcome');
});

Route::get('/products', ['as' => 'products', 'uses' => 'ProductsController@all']);

Route::post('/submit', ['as' => 'submitHandler', 'uses' => 'SubmissionController@handle']);