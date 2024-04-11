
import React from 'react';
import axios from 'axios';
import "../follow.css";
const FollowButton = ({ userId, token }) => {
    const handleFollow = async () => {
        try {
            await axios.post(`http://127.0.0.1:8000/api/user/${userId}/follow`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert('You are now following this user');
        } catch (error) {
            console.error('Error following user:', error);
        }
    };

    return <button onClick={handleFollow} className="follow-button">Follow</button>;
};

export default FollowButton;
