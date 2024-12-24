import React, { useState } from 'react';
import axios from '../../services/axiosConfig';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const[ role,setRole]=useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/validate', { email, password });
            const out = response.data;
            if (out === "admin") {
                navigate("/admin");
                setRole("admin")
                alert("Admin Login successful");
            } else if(out === "customer") {
                navigate("/customer");
                setRole("customer")
                alert("Customer Login successful");
            } else if(out === "membership") {
                navigate("/membership");
                setRole("admin")
                alert("Membership Login successful");
            } else {
                alert("Invalid username or password");
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className='login-container'>
            <Navbar userRole={role}/>
            
            <h2 className='login'>Login</h2>
            <form onSubmit={handleLogin}>
                
                <input
                    type="email"
                    placeholder="Username"
                    // autoComplete='username'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    autoComplete='current-password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='login-btn' type='submit'>Login</button>
                <p>Don't have an account? <a href="/registeration">Sign up</a></p>
            </form>
        </div>
    );
};

export default Login;
