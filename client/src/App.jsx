import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Diet from "./pages/Diet";
import Exercise from "./pages/Exercise";
import Sleep from "./pages/Sleep";
import Wellness from "./pages/Wellness";
import Habits from "./pages/Habits";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/diet"
          element={<Diet />}
        />

        <Route
          path="/exercise"
          element={<Exercise />}
        />

        <Route
          path="/sleep"
          element={<Sleep />}
        />

        <Route
          path="/wellness"
          element={<Wellness />}
        />

        <Route
          path="/habits"
          element={<Habits />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      <Route 
      path="/register" 
      element={<Register />} />

      <Route 
      path="/dashboard" 
      element={<Dashboard />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;