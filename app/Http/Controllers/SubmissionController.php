<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Submission;
use App\SubmissionsCart;
use Illuminate\Http\Request;
use Validator;

class SubmissionController extends Controller
{
    public function handle(Request $request) {
    	$submission = (array)json_decode($request->getContent());
    	$submission['timestamp'] = time();

    	$validator = Validator::make((array)$submission, [
    		'name' => 'required',
    		'jobTitle' => 'required',
    		'department' => 'required',
    		'email' => 'required|email',
    		'phone' => 'required',
    		'address' => 'required',
    		'city' => 'required',
    		'state' => 'required',
    		'zip' => 'required',
    		'costCenterNumber' => 'required',
    		'employeeID' => 'required'
		]);

		if ($validator->fails()) {
	    	return response()->json([
	    		'success' => FALSE,
	    		'errors' => $validator->errors()
			]);	
		}

		$instance = Submission::create($submission);

		foreach($submission['cart'] as $item) {
			SubmissionsCart::create([
				'submission_id' => $instance->id,
				'variation_id' => $item->variation_id,
				'quantity' => $item->qty,
			]);
		}

    	return response()->json([
    		'success' => TRUE
		]);
    }
}
