<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubmissionsCart extends Model
{
	protected $table = 'submissions_cart';
	
    protected $fillable = ['submission_id', 'variation_id', 'quantity'];
}
