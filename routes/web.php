<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index');
})->name('home');

// Routes for Residential & Personal pages
Route::get('/residential-and-personal', function () {
    return Inertia::render('residential-and-personal');
})->name('residential-and-personal.overview');

Route::prefix('residential-and-personal')->name('residential-and-personal.')->group(function () {
    Route::get('/mobile', function () {
        return Inertia::render('residential-and-personal/mobile');
    })->name('mobile');

    Route::get('/internet', function () {
        return Inertia::render('residential-and-personal/internet');
    })->name('internet');

    Route::get('/telephone', function () {
        return Inertia::render('residential-and-personal/telephone');
    })->name('telephone');

    Route::get('/digital-tv', function () {
        return Inertia::render('residential-and-personal/digital-tv');
    })->name('digital-tv');

    Route::get('/special-offers', function () {
        return Inertia::render('residential-and-personal/special-offers');
    })->name('special-offers');

    Route::get('/wifi-rental', function () {
        return Inertia::render('residential-and-personal/wifi-rental');
    })->name('wifi-rental');
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

Route::get('/site-map', function () {
    return Inertia::render('index');
})->name('site.map');

Route::get('/general-policies', function () {
    return Inertia::render('index');
})->name('general.policies');

Route::get('/subscribe-to-newsletter', function () {
    return Inertia::render('index');
})->name('subscribe.newsletter');

Route::get('/rfp', function () {
    return Inertia::render('index');
})->name('rfp');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
