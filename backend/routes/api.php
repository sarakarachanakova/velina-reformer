<?php

use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\InstructorController;
use App\Http\Controllers\Api\PageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public API routes
|--------------------------------------------------------------------------
|
| Read-only endpoints consumed by the public Vue frontend. No
| authentication — this content is meant to be publicly visible.
*/
Route::get('/pages/{page:slug}', [PageController::class, 'show']);
Route::get('/instructors', [InstructorController::class, 'index']);
Route::get('/instructors/{instructor}', [InstructorController::class, 'show']);
Route::get('/gallery', [GalleryController::class, 'index']);
Route::get('/gallery/{gallery}', [GalleryController::class, 'show']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

/*
|--------------------------------------------------------------------------
| Admin API routes
|--------------------------------------------------------------------------
|
| Write endpoints for the future Admin/CMS area. Protected by Sanctum
| token auth — no admin UI exists yet, but the backend foundation is
| ready for one to be built against this API without any changes here.
*/
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::put('/pages/{page:slug}', [PageController::class, 'update']);

    Route::post('/instructors', [InstructorController::class, 'store']);
    Route::put('/instructors/{instructor}', [InstructorController::class, 'update']);
    Route::delete('/instructors/{instructor}', [InstructorController::class, 'destroy']);

    Route::post('/gallery', [GalleryController::class, 'store']);
    Route::put('/gallery/{gallery}', [GalleryController::class, 'update']);
    Route::delete('/gallery/{gallery}', [GalleryController::class, 'destroy']);
});
