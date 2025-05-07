import "./Login.css";
import LoginInput from "../../components/LoginInput/LoginInput";

export default function LoginPage() {
  return (
    <div className="container">
      <img src="/logo-gif.gif" alt="logo-gif" className="logo" />
      <LoginInput />
    </div>
  );
}
