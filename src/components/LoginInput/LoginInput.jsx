import "./LoginInput.css";
import { useState } from 'react';

export default function LoginInput() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault(); 
        console.log("Login data:", { email, password });
    }

    return (
        <div className="login-form">
            <h1>User Login</h1>
            <form onSubmit={handleLogin}>
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
                <input type="submit" value="LOGIN" />
            </form>
        </div>
    );
}
