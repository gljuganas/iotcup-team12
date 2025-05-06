import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Link } from 'react-router-dom';


export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rfid, setRfid] = useState("");
    const [message, setMessage] = useState("");
     
    async function handleRegister(e) {
        e.preventDefault(); 
        const allFieldsFilled = await checkAllFields();
        const emailValid = await isValidEmail(email);
        const passwordMatch = await checkPassword();
        const passwordHashed = await hashPassword(password);

        if (allFieldsFilled && emailValid && passwordMatch) {
            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/add_user`, {
                    name: name,
                    email: email,
                    password: passwordHashed,
                    rfid: rfid,
                    balance: 0.00, // Hard coded since new user has 0 balance
                    permission: 0
                });
                if (response.status === 200) {
                    setMessage("User registered successfully!");
                    setTimeout(() => {
                        setMessage("");
                    }, 3000);
                } else {
                    setMessage("Error registering user!");
                    setTimeout(() => {
                        setMessage("");
                    }, 3000);
                }
            } catch (error) {
                console.error("Error registering user:", error);
            }
        }
    }

    // Function to check if all fields are filled
    async function checkAllFields() {
        if (!name || !email || !password || !confirmPassword) {
            setMessage("Please fill all fields!");
            setTimeout(() => {
                setMessage("");
            }, 3000);
            return false;
        }
        return true;
    }

    // Function to check if user not taken
    // Idk if still needed, but just in case
    // async function checkUserTaken() {
    //     try {
    //         const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/user?email=${email}`);
    //         if (response.data.length > 0) {
    //             setError("Email already taken!");
    //             setTimeout(() => {
    //                 setError("");
    //             }, 3000);
    //             return false;
    //         }
    //         return true;
    //     } catch (error) {
    //         console.error("Error checking user:", error);
    //     }
    // }

    async function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    async function checkPassword() {
        if (password !== confirmPassword) {
            setMessage("Passwords do not match!");
            setTimeout(() => {
                setMessage("");
            }, 3000);
            return false;
        }
        return true;
    }

    async function hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    return (
        <div className='register-container'>
            <div className="register-form">
                <h1 className='register-text'>REGISTER USER</h1>
                <form onSubmit={handleRegister}>
                    <label>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            name="name"
                            value={name}
                            onChange={(e) => setName(prev => e.target.value)}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(prev => e.target.value)}
                        />
                    </label>
                    <label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(prev => e.target.value)}
                        />
                    </label>
                    <label>
                        <input 
                            type="password" 
                            placeholder="Repeat Password" 
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(prev => e.target.value)}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            placeholder="RFID (Staff Only)" 
                            name="rfid"
                            value={rfid}
                            onChange={(e) => setRfid(prev => e.target.value)}
                        />
                    </label>
                    {message && (
                        <div className={message.includes("successfully") ? 'success' : 'error'}>
                            {message}
                        </div>
                    )}
                    <input type="submit" value="SUBMIT" />
                    <Link to="/home">Go back</Link>
                </form>
            </div>
        </div>
    )
}