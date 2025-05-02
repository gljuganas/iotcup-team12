import './Register.css';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rfid, setRfid] = useState("");
    const [error, setError] = useState("");
    
    async function registerUser() {
        // TEST DB CONNECTION ONLY
        try {
            const queryParams = new URLSearchParams({
                id: 1,
            }).toString();
    
            console.log("Query Params:", queryParams);
    
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/user?${queryParams}`);
            console.log(response.data);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    

 
    async function handleRegister(e) {
        e.preventDefault(); 
         await registerUser(); // Call the function to test DB connection
        console.log("Login data:", { name, email, password, confirmPassword, rfid });

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            setTimeout(() => {
                setError("");
                setPassword("");
                setConfirmPassword("");
            }, 3000);

            return;
        }
    }

    // Function to check if all fields are filled

    // Function to check if user not taken

    // Function to check if the email is valid

    // Function to check if password is similar

    // Function to hash the password

    // Function to send the data to the server

    return (
        <div className='register-container'>
            <div className="register-form">
                <h1>REGISTER USER</h1>
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
                    {error && <div className='error'>{error}</div>}
                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    )
}