<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index');
})->name('home');

// Dummy routes for new navigation items.
// You can later create dedicated controllers and components for these pages.
Route::prefix('residential-personal')->name('residential.')->group(function () {
    Route::get('/mobile', function () {
        return Inertia::render('index');
    })->name('mobile');

    Route::get('/internet', function () {
        return Inertia::render('index');
    })->name('internet');

    Route::get('/telephone', function () {
        return Inertia::render('index');
    })->name('telephone');

    Route::get('/digital-tv', function () {
        return Inertia::render('index');
    })->name('digital-tv');

    Route::get('/special-offers-bundles', function () {
        return Inertia::render('index');
    })->name('special-offers');

    Route::get('/4g-wifi-rental', function () {
        return Inertia::render('index');
    })->name('4g-wifi-rental');
});

Route::get('/business', function () {
    return Inertia::render('index');
})->name('business');

Route::get('/visitors', function () {
    return Inertia::render('index');
})->name('visitors');

Route::get('/online-store', function () {
    return Inertia::render('index');
})->name('online-store');

Route::get('/about-pncc', function () {
    return Inertia::render('index');
})->name('about-pncc');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
