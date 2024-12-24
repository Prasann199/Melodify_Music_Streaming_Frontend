import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Register = () => {
    const [choosedRole, setChoosedRole] = useState("");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        role: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Update choosedRole state when the role radio button changes
        if (name === "role") {
            setChoosedRole(value);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/register', formData);
            alert(response.data);
            navigate("/login");
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className='register-container'>
                <h2>Register</h2>
                <form>
                    <div className="col">
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Name </label></td>
                                    <td>
                                        <input
                                            className='txtinput'
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder='Enter Name'
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Email </label></td>
                                    <td>
                                        <input
                                            className="txtinput"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder='Enter Email'
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Password </label></td>
                                    <td>
                                        <input
                                            className="txtinput"
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder='Enter Password'
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Gender:</label></td>
                                    <td>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={formData.gender === 'male'}
                                            onChange={handleChange}
                                        /> Male
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={formData.gender === 'female'}
                                            onChange={handleChange}
                                        /> Female
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Role </label></td>
                                    <td>
                                        <input
                                            type="radio"
                                            name="role"
                                            value="user"
                                            checked={formData.role === 'user'}
                                            onChange={handleChange}
                                        /> User
                                        <input
                                            type="radio"
                                            name="role"
                                            value="admin"
                                            checked={formData.role === 'admin'}
                                            onChange={handleChange}
                                        /> Admin
                                    </td>
                                </tr>
                                <div>
                                        {/* Conditionally render the message */}
                                        {choosedRole === "admin" && (
                                            <tr className='align-items-start'>

                                            <label
                                                className='roleinfo'
                                                style={{ color: 'red', fontWeight: 'bold',fontSize:"16px" }}
                                            >
                                                * Admins need to pay ₹250 for registration.
                                            </label>
                                            </tr>
                                        )}
                                    </div>
                                <tr>
                                    <td><label htmlFor="">Address </label></td>
                                    <td>
                                        <textarea
                                            className="txtareainput"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder='Enter Address'
                                        ></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button type="button" className="reg-btn" onClick={handleRegister}>
                        Register
                    </button>
                    <br />
                    <p>Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </>
    );
};

export default Register;
