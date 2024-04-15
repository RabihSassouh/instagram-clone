<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Follower;

class FollowController extends Controller
{
    public function toggleFollow($userId)
    {
        $user = auth()->user();
        // $followedUser = User::findOrFail($userId);
        $isFollowing = Follower::where('follower_id', $user->id)
            ->where('followed_id', $userId)
            ->exists();

        if (!$isFollowing) {
            Follower::create([
                'follower_id' => $user->id,
                'followed_id' => $userId
            ]);
            return response()->json(['message' => 'Successfully followed user.']);
        } else {
            Follower::where('follower_id', $user->id)
                ->where('followed_id', $userId)
                ->delete();
            return response()->json(['message'=>'Successfully unfollowed user.']);
        }
    }
}
