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
    Route::post('details', 'AuthController@details');
    });