<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Mail\ResetPasswordMail;
use App\Http\Requests\ResetPasswordRequest;
class ResetPasswordController extends Controller
{
    public function sendEmail(Request $request)
    {
        if(!$this->validateEmail($request->email))
        {
            return response()->json(['error' => 'Email does not exist'], 404);
        }
        $this->send($request->email);
        return response()->json(['success' => 'Email sent successfully. Please check your inbox'], 200);
    }

    public function send($email)
    {
        $token = $this->createToken($email);
        
        \Mail::to($email)->send(new ResetPasswordMail($token));
    }
    public function validateEmail($email)
    {
        return !!User::where(['email'=>$email])->first();
    }
    public function createToken($email)
    {
        $oldToken = \DB::table('password_resets')->where(['email'=>$email])->first();
        if($oldToken)
            $token = $oldToken->token;
        else
        {
            $token = str_random(60);
            $this->saveToken($token,$email);
        }
        
        return $token;
            
    }
    public function saveToken($token,$email)
    {
        \DB::table('password_resets')->insert([
            'email'=>$email,
            'token'=>$token,
            'created_at'=>date('Y-m-d H:i:s')
        ]);
    }

    public function resetPassword(ResetPasswordRequest $request)
    {
        
        $checkEmail = \DB::table('password_resets')->where(['email'=>$request->email,'token'=>$request->resetToken])->first();
        if($checkEmail)
        {
            $user = User::where(['email'=>$request->email])->first();
            $user->password = bcrypt($request->password);
            $user->save();
            return response()->json(['success' => 'Password changed successfully'], 200);
        }
        else{
            return response()->json(['error' => 'Email or token incorrect'], 200);
        }
    }
}
