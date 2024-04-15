<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Follower;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{

    public function createPost(Request $request)
    {
        $request->validate([
            'caption'=>'string|max:255',
            'image'=>'required|image|max:2048',
        ]);

        $user = Auth::user();

        $imagePath = $request->file('image')->store('images');

        $post = Post::create([
            'user_id' => $user->id,
            'image' => $imagePath,
            'caption' => $request->caption,
        ]);
        $post->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully',
            'post' => $post,
        ]);
    }


    public function getAllPosts()
    {
        $user = auth()->id();
    
        $followedUserIds = Follower::where('follower_id', $user)->pluck('follower_id');
     
        $posts = Post::whereIn('user_id', $followedUserIds)
        ->with(['user', 'likes'])
        ->orderBy('created_at', 'desc')
        ->get();
    
    $posts->each(function ($post) use ($user) {
        $post->liked_by_user = $post->likes->contains('user_id', $user);
    });
    
    
        return response()->json(['posts' => $posts], 200);
    }

    

}
