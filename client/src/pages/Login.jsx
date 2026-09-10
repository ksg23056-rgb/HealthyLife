import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");

    } catch (error) {
      setMessage("Unable to connect to server.");
    }
  };

  return (
    <main className="auth-page">

      <div className="login-card">

        <div className="login-logo">
          🌿
        </div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to your HealthyLife account
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-submit">
            LOGIN
          </button>

        </form>

        {message && (
          <p className="login-message">
            {message}
          </p>
        )}

        <div className="create-account">

          <p>Don't have an account?</p>

          <button
            onClick={() => navigate("/register")}
            className="create-account-btn"
          >
            CREATE ACCOUNT
          </button>

        </div>

      </div>

    </main>
  );
}

export default Login;