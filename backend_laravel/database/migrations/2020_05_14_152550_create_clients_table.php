<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->enum('typeUser',['cnpj', 'cpf'])->default('cnpj');
            $table->string('name', 200)->nullable();
            $table->bigInteger('federal_number')->nullable();
            $table->foreign('office_id')->references('id')->on('offices')->onDelete('cascade');            
            $table->foreign('coworking_plan_id')->references('id')->on('coworking_plans')->onDelete('cascade');
            $table->boolean('active')->nullable()->default(true);
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
        Schema::dropIfExists('clients');
    }
}
