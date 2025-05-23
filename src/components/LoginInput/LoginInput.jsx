import "./LoginInput.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice"; // Assuming you have a userSlice in your Redux store

export default function LoginInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogin(e) {
    console.log(localStorage);
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please enter both email and password!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    axios
      .get(`${process.env.REACT_APP_BACKEND_API_URL}/get_user?email=${email}`)
      .then((response) => {
        if (response.status === 200 && response.data) {
          const user = response.data;
          if (user && bcrypt.compareSync(password, user.password)) {
            dispatch(setUser(user));
            navigate("/home");
          } else {
            setMessage("Invalid email or password!");
            setTimeout(() => {
              setMessage("");
            }, 3000);
          }
        } else {
          setMessage("User not found!");
          setTimeout(() => {
            setMessage("");
          }, 3000);
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage("Error logging in!");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  }

  return (
    <div className="login-form">
      <h1>USER LOGIN</h1>
      <form onSubmit={handleLogin}>
        <label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {message && <div className="error">{message}</div>}
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
}
