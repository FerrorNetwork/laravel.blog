<?php

namespace App\Http\Controllers\Admin;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class MainController extends Controller
{
    public function index(){

        $user = Auth::user();
        return view('admin.index', compact('user'));
    }
}
