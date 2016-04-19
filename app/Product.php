<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $appends = ['variations'];

    public function getVariationsAttribute() {
    	return ProductVariation::where('product_id', $this->id)->get();
    }
}
