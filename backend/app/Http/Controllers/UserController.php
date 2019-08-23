<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }
    public function me(Request $request)
    {
        $user = \JWTAuth::parseToken()->authenticate();
        return auth()->user();;
    }
    public function guard()
    {
        return \JWTAuth::guard();
    }
}
