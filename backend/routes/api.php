<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::group([

    'middleware' => 'api',
    
], function () {

    

});

Route::middleware('jwt.auth')->get('me', function(Request $request) {
    return auth()->user();
});
Route::group([
    'middleware'=>['auth:api']
],
function()
{
    Route::post('category/add','CategoryController@create');
}
); */

//Route::post('login', 'AuthController@login');
Route::post('login', [ 'as' => 'login', 'uses' => 'AuthController@login']);
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    //Route::post('me', 'UserController@me');

    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ResetPasswordController@resetPassword');
Route::group(['middleware' => 'auth:api'], function(){
    Route::post('category/add','CategoryController@create');
    Route::get('category/index','CategoryController@index');
    Route::get('category/show/{id}','CategoryController@show');
    Route::post('category/update/{id}','CategoryController@update');
    Route::get('category/destroy/{id}','CategoryController@destroy');
    Route::get('category/list','CategoryController@list');

    Route::post('product/add','ProductsController@create');
    Route::get('product/index','ProductsController@index');
    Route::get('product/show/{id}','ProductsController@show');
    Route::post('product/update/{id}','ProductsController@update');
    Route::get('product/destroy/{id}','ProductsController@destroy');



    Route::post('details', 'AuthController@details');
    });