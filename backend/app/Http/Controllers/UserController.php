<?php


namespace App\Http\Controllers;

use JWTAuth;
// use Tymon\
// use Faker\Core\File;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;
use Illuminate\Validation\ValidationException;
use App\Models\User;

class UserController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login', 'register']]);
    // }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');
        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }
        $user = Auth::user();
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);

        // User::where('email',$request->email)->first();
        // if (!$user || !Hash::check($request->password,$user->password)){
        //     throw ValidationException::withMessages([
        //         'email'=>['Incorrect credentials.'],
        //     ]);
        // }
        // else {
        //     return($user);
        // };
    }

    public function signup(Request $request)
    {
        
        $request->validate([
            'email' => 'required|string|email|unique:users',
            'name' => 'required',
            'username'=>'required',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'email' => $request->email,
            'name' => $request->name ,
            'username'=>$request->username,
            'password' => Hash::make($request->password),
        ]);


        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

     public function logout()
     {
        Auth::logout();
        return response()->json([
            'status'=>'success',
            'message'=>'logged out successfully',
        ]);
     }
     public function refresh()
     {
         return response()->json([
             'status' => 'success',
             'user' => Auth::user(),
             'authorisation' => [
                 'token' => Auth::refresh(),
                 'type' => 'bearer',
             ]
         ]);
     }
}
