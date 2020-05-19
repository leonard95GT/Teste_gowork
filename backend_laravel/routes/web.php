<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//Office's
Route::get   ('/office', 'OfficeController@index')      ->name('getAllOffice');
Route::post  ('/office', 'OfficeController@store')      ->name('createOffice');
Route::post  ('/officesearch', 'OfficeController@search')->name('seacrhOffice');
Route::patch ('/office', 'OfficeController@update')      ->name('updateOffice');
Route::delete('/office', 'OfficeController@destroy')      ->name('deleteOffice');

//Plans
Route::get   ('/coworking-plan', 'CoworkingPlanController@index')      ->name('getAllCP');
Route::post  ('/coworking-plan', 'CoworkingPlanController@store')      ->name('createCP');
Route::post  ('/cp-search', 'CoworkingPlanController@search')          ->name('seacrhCP');
Route::patch ('/coworking-plan', 'CoworkingPlanController@update')     ->name('updateCP');
Route::delete('/coworking-plan', 'CoworkingPlanController@destroy')    ->name('deleteCP');
