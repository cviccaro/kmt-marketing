<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    protected $fillable = ['name', 'jobTitle', 'department', 'email', 'phone', 'address', 'city', 'state', 'zip', 'costCenterNumber', 'employeeID', 'timestamp'];
}
