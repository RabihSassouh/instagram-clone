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

use function Laravel\Prompts\password;

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
     public function getUser()
     {
        $user= Auth::user();
        return response()->json([
            'user'=>$user,
            // 'username' => $user->username,
            // 'password' => $user->password,
        ]);
     }

     public function updateProfile(Request $request)
     {
        $Authuser= Auth::user();
        $user=User::where("email", $Authuser->email)->first();
        $user->update([
            'name'=>$request->name,
            // 'username'=>$request->username,
            // 'email'=>$request->email,
            // 'profile_picture'=>$request->profile_picture
        ]);
 
        return response()->json([
            'user'=>$user

        ]);
     }

     public function createPost(Request $request)
    {
        $request->validate([
            'caption' => 'string',
            'image' => 'required|image',
        ]);
        
        $Authuser= Auth::user();
        $user=User::where("email", $Authuser->email)->first();
       
        $imagePath = $request->file('image')->store('images');

        $post = $user->posts()->create([
            'caption' => $request->caption,
            'image' => $imagePath,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully',
            'post' => $post,
        ]);
    }

    public function follow(Request $request, $userId)
    {
        $user = User::find($userId);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $currentUser = $request->user();

        if ($currentUser->id == $userId) {
            return response()->json(['error' => 'You cannot follow yourself'], 400);
        }

        $currentUser->following()->attach($userId);

        return response()->json(['message' => 'You are now following ' . $user->name]);
    }
}