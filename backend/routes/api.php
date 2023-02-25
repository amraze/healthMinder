<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/users', [UserController::class, 'index']);
Route::get('/doctors', [DoctorController::class, 'index']);
Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/faqs', [FaqController::class, 'index']);
Route::get('/calendars', [CalendarController::class, 'index']);
