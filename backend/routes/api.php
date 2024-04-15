<?php

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\LikesController;
use App\Http\Controllers\CommentsController;

Route::controller(UserController::class)->group(function () {
    Route::get('getUser','getUser');
    Route::post('updateProfile','updateProfile');
});

Route::controller(AuthController::class)->group(function () {
Route::post('login', 'login');
Route::post('signup', 'signup');
Route::post('logout', 'logout');
Route::post('refresh', 'refresh');
});

Route::post('/createPost',[PostController::class,'createPost']);
Route::get('/Posts', [PostController::class, 'getAllPosts']);

Route::post('/toggleFollow/{userId}', [FollowController::class, 'toggleFollow']);


Route::post('/toggleLike/{postId}', [LikesController::class, 'toggleLike']);
Route::get('/likeCount/{postId}', [LikesController::class, 'getPostLikes']);

Route::post('/addComment/{postId}', [CommentsController::class, 'addComment']);
Route::get('/getComment/{postId}', [CommentsController::class, 'getComments']);