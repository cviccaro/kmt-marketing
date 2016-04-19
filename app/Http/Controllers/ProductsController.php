<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function all(Request $request) {
    	$products = Product::all();
    	return response()->json($products);
    }
}
