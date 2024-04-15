<?php


namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class UserController extends Controller
{
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