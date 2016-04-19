<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubmissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('submissions', function (Blueprint $table) {
            $table->increments('id');
            $table-> string('name');
            $table-> string('jobTitle');
            $table-> string('department');
            $table-> string('email');
            $table-> string('phone');
            $table-> string('address');
            $table-> string('city');
            $table-> string('state');
            $table-> string('zip');
            $table-> string('costCenterNumber');
            $table-> string('employeeID');
            $table-> integer('timestamp');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('submissions');
    }
}
