<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Kontakt;
use App\Http\Controllers\Kontrol;


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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('api')->post('/kontrol/create', [Kontrol::class, 'store']);
Route::middleware('api')->post('/kontrol/update/{id}', [Kontrol::class, 'update']);
Route::middleware('api')->delete('/kontrol/delete/{id}', [Kontrol::class, 'destroy']);
Route::middleware('api')->get('/kontrols', [Kontrol::class, 'index']);

//Route::middleware('api')->post('/create',[Kontakt::class,'store']);
//Route::middleware('api')->post('/update/{id}',[Kontakt::class,'update']);
//Route::middleware('api')->post('/delete/{id}',[Kontakt::class,'destroy']);
//Route::middleware('api')->get('/blog',[Kontakt::class,'index']);
