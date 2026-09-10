import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        🌿 HealthyLife
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/diet">Diet</Link>

        <Link to="/exercise">Exercise</Link>

        <Link to="/sleep">Sleep</Link>

        <Link to="/wellness">Wellness</Link>

        <Link to="/habits">Habits</Link>

        {isLoggedIn && (
          <Link to="/dashboard">
            Dashboard
          </Link>
        )}

      </div>

      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="logout-nav-btn"
        >
          LOGOUT
        </button>
      ) : (
        <Link to="/login" className="login-btn">
          LOGIN
        </Link>
      )}

    </nav>
  );
}

export default Navbar;