<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User;
use App\Http\Requests\SignupRequest;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth:api', ['except' => ['login','signup']]);
    }

    /**
     * Get a JWT token via given credentials.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $token =  $user->createToken('MyApp')-> accessToken; 
            return response()->json([ 'token'=>$token], 200); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        }
        /* $credentials = $request->only('email', 'password');

        if ($token = \JWTAuth::attempt($credentials)) {
            return $this->respondWithToken($token);
        }

        return response()->json(['error' => 'Email or Password does not exist'], 401); */
    }

    public function signup(SignupRequest $request)
    {
        $requestData = $request->all();
        $requestData['password']= bcrypt($request->password);
        
        $user = User::create($requestData);
        return $this->login($request);
    }

    /**
     * Get the authenticated User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    /* public function me()
    {
        return response()->json($this->guard()->user());
    } */

    public function me(Request $request)
    {
        $user = \JWTAuth::User();
        dd($user);
    }

    public function details() 
    { 
        $user = Auth::user(); 
        return response()->json(['success' => $user], 200); 
    } 

    /**
     * Log the user out (Invalidate the token)
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user'=>auth()->user()->name
        ]);
    }

    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    public function guard()
    {
        return Auth::guard();
    }
}