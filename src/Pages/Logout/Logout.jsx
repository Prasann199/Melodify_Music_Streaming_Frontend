import React from 'react';
import axios from 'axios';


const Logout = () => {
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8080/api/logout', {}, { withCredentials: true });
            alert("Logout successful");
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
