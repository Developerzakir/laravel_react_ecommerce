<?php

use App\Http\Controllers\Admin\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::get('/getvisitors',[VisitorController::class,'getVisitorDetails']);
