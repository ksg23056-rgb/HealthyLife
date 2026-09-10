import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
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

      setMessage("Account created successfully! 🌿");

      // Go to login page after registration
      setTimeout(() => {
        navigate("/login");
      }, 1000);

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

        <h1>Create Account</h1>

        <p className="login-subtitle">
          Start your HealthyLife journey
        </p>

        <form onSubmit={handleRegister}>

          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-submit">
            CREATE ACCOUNT
          </button>

        </form>

        {message && (
          <p className="login-message">
            {message}
          </p>
        )}

        <div className="create-account">

          <p>Already have an account?</p>

          <button
            onClick={() => navigate("/login")}
            className="create-account-btn"
          >
            LOGIN
          </button>

        </div>

      </div>

    </main>
  );
}

export default Register;