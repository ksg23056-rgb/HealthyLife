import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const handleAuth = async (e) => {
  e.preventDefault();

  const endpoint = isLogin
    ? "http://localhost:5000/api/auth/login"
    : "http://localhost:5000/api/auth/register";

  const data = isLogin
    ? { email, password }
    : { name, email, password };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      setAuthMessage(result.message);

      if (isLogin) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
      }
    } else {
      setAuthMessage(result.message);
    }

  } catch (error) {
    setAuthMessage("Unable to connect to server");
  }
};
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          🌿 Healthy<span>Life</span>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#diet">Diet</a>
          <a href="#exercise">Exercise</a>
          <a href="#sleep">Sleep</a>
          <a href="#wellness">Wellness</a>
          <a href="#habits">Habits</a>
          <button
            className="login-btn"
            onClick={() => {
            setIsLogin(true);
            setShowAuth(true);
          }}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">YOUR HEALTH • YOUR FUTURE</p>

          <h1>
            Live Better.
            <br />
            <span>Feel Better.</span>
          </h1>

          <p className="hero-text">
            Discover simple and practical ways to improve your diet,
            exercise, sleep, mental wellness and everyday habits.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="primary-btn">
              Explore Healthy Living →
            </a>

            <a href="#habits" className="secondary-btn">
              Start Your Journey
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="circle">🌱</div>
          <h3>Small Habits</h3>
          <p>Big Changes</p>

          <div className="mini-stats">
            <div>
              <strong>8h</strong>
              <span>Sleep</span>
            </div>

            <div>
              <strong>2L</strong>
              <span>Water</span>
            </div>

            <div>
              <strong>30m</strong>
              <span>Exercise</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="section-heading">
          <p className="small-title">HEALTHY LIVING</p>
          <h2>What is a Healthy Lifestyle?</h2>
          <p>
            A healthy lifestyle is about creating balanced habits that
            support your physical and mental well-being.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">🥗</div>
            <h3>Healthy Diet</h3>
            <p>
              Choose nutritious foods and maintain a balanced diet
              for energy and overall health.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🏃</div>
            <h3>Regular Exercise</h3>
            <p>
              Stay active through walking, workouts, sports,
              stretching and other physical activities.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">😴</div>
            <h3>Quality Sleep</h3>
            <p>
              Give your body enough time to rest and recover with
              a consistent sleep schedule.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🧠</div>
            <h3>Mental Wellness</h3>
            <p>
              Take care of your mind through relaxation, mindfulness,
              hobbies and meaningful connections.
            </p>
          </div>
        </div>
      </section>

      {/* Diet */}
      <section className="colored-section" id="diet">
        <div className="section-heading">
          <p className="small-title">NUTRITION</p>
          <h2>Eat Well, Live Well 🥗</h2>
          <p>
            A balanced diet provides the nutrients your body needs
            to stay healthy and active.
          </p>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <span>🍎</span>
            <h3>Fruits & Vegetables</h3>
            <p>Rich sources of vitamins, minerals and fibre.</p>
          </div>

          <div className="info-card">
            <span>🌾</span>
            <h3>Whole Grains</h3>
            <p>Choose whole grains for fibre and sustained energy.</p>
          </div>

          <div className="info-card">
            <span>🥜</span>
            <h3>Healthy Proteins</h3>
            <p>Include beans, pulses, eggs, nuts and other protein sources.</p>
          </div>
        </div>
      </section>

      {/* Exercise */}
      <section className="section" id="exercise">
        <div className="section-heading">
          <p className="small-title">FITNESS</p>
          <h2>Move Your Body 🏃</h2>
          <p>
            Regular physical activity can improve fitness, strength,
            energy and overall well-being.
          </p>
        </div>

        <div className="exercise-grid">
          <div className="exercise-card">
            <span>🚶</span>
            <h3>Walking</h3>
            <p>A simple activity that can easily become part of your daily routine.</p>
          </div>

          <div className="exercise-card">
            <span>🧘</span>
            <h3>Yoga & Stretching</h3>
            <p>Improve flexibility and include relaxation in your routine.</p>
          </div>

          <div className="exercise-card">
            <span>🏋️</span>
            <h3>Strength Training</h3>
            <p>Build strength with suitable bodyweight or resistance exercises.</p>
          </div>
        </div>
      </section>

      {/* Sleep */}
      <section className="sleep-section" id="sleep">
        <div>
          <p className="small-title">REST & RECOVERY</p>
          <h2>Make Sleep a Priority 😴</h2>
          <p>
            Good sleep helps your body and mind recover. Maintaining
            a consistent sleep routine can support better daily functioning.
          </p>

          <ul>
            <li>🌙 Keep a consistent bedtime.</li>
            <li>📱 Reduce screen use before sleeping.</li>
            <li>☕ Avoid excessive caffeine late in the day.</li>
            <li>🛏️ Create a comfortable sleep environment.</li>
          </ul>
        </div>

        <div className="sleep-card">
          <div className="moon">🌙</div>
          <h3>Healthy Sleep Routine</h3>
          <p>Rest • Recover • Recharge</p>
          <strong>7–9 hours</strong>
          <span>Recommended for most adults</span>
        </div>
      </section>

      {/* Wellness */}
      <section className="section" id="wellness">
        <div className="section-heading">
          <p className="small-title">MIND & BODY</p>
          <h2>Take Care of Your Mind 🧠</h2>
          <p>
            Mental wellness is an important part of living a balanced
            and healthy life.
          </p>
        </div>

        <div className="wellness-grid">
          <div>
            <span>🧘</span>
            <h3>Mindfulness</h3>
            <p>Take a few quiet moments to focus on the present.</p>
          </div>

          <div>
            <span>🎵</span>
            <h3>Relaxation</h3>
            <p>Enjoy activities that help you relax and recharge.</p>
          </div>

          <div>
            <span>👨‍👩‍👧</span>
            <h3>Connections</h3>
            <p>Spend meaningful time with family and friends.</p>
          </div>
        </div>
      </section>

      {/* Habits */}
      <section className="habits-section" id="habits">
        <div className="section-heading">
          <p className="small-title">DAILY ROUTINE</p>
          <h2>Build Healthy Habits ✅</h2>
          <p>
            Start with small actions and make them part of your daily routine.
          </p>
        </div>

        <div className="habit-list">
          <div>💧 Drink enough water</div>
          <div>🥗 Eat nutritious meals</div>
          <div>🏃 Stay physically active</div>
          <div>😴 Get enough sleep</div>
          <div>🧠 Take care of your mental health</div>
          <div>📱 Take regular screen breaks</div>
        </div>
      </section>
          {/* Authentication Modal */}
{showAuth && (
  <div className="auth-overlay">
    <div className="auth-box">

      <button
        className="close-btn"
        onClick={() => setShowAuth(false)}
      >
        ✕
      </button>

      <h2>{isLogin ? "Welcome Back 🌿" : "Create Your Account 🌱"}</h2>

      <p>
        {isLogin
          ? "Login to continue your HealthyLife journey."
          : "Create an account to start your healthy journey."}
      </p>

         {!isLogin && (
  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
)} 

  <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

  <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

      

      <button
  className="auth-submit-btn"
  onClick={handleAuth}
>
  {isLogin ? "Login" : "Register"}
</button>

{authMessage && (
  <p className="auth-message">
    {authMessage}
  </p>
)}

      <p className="auth-switch">
        {isLogin
          ? "Don't have an account?"
          : "Already have an account?"}

        <button
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? " Register" : " Login"}
        </button>
      </p>

    </div>
  </div>
)}
      {/* Footer */}
      <footer>
        <div className="logo">
          🌿 Healthy<span>Life</span>
        </div>

        <p>
          Building healthier habits, one day at a time.
        </p>

        <p className="copyright">
          © 2026 HealthyLife. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;