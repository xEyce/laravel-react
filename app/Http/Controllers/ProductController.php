<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function Index(){
        return Inertia::render('Products/Index', []);
    }

    public function Create(){
        return Inertia::render('Products/Create');
    }
}
