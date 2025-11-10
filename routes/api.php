<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\SiteController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\VisitorController;




Route::get('/getvisitors',[VisitorController::class,'getVisitorDetails']);

//contact info
Route::post('/insert-contact',[ContactController::class,'insertContactDetails']);

//site info
Route::get('/allsite-info',[SiteController::class,'allSiteInfo']);
