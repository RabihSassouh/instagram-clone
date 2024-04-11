<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::controller(UserController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('signup', 'signup');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('getUser','getUser');
    Route::post('updateProfile','updateProfile');
    Route::post('createPost','createPost');
    
});

Route::post('/user/{userId}/follow', [UserController::class, 'follow']);
