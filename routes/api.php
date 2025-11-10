<?php

use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::get('/getvisitors',[VisitorController::class,'getVisitorDetails']);
Route::post('/insert-contact',[ContactController::class,'insertContactDetails']);
