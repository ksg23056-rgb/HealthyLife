import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  // =========================
  // HABITS
  // =========================

  const [habits, setHabits] = useState({
    water: false,
    exercise: false,
    healthyMeal: false,
    sleep: false,
    relaxation: false
  });

  const [message, setMessage] = useState("");

  // =========================
  // CUSTOM HEALTH GOALS
  // =========================

  const [goals, setGoals] = useState({
    waterGoal: 2,
    exerciseGoal: 30,
    sleepGoal: 8
  });

  const [goalMessage, setGoalMessage] = useState("");

  // =========================
  // ACTUAL HEALTH DATA
  // =========================

  const [healthData, setHealthData] = useState({
    waterIntake: 0,
    exerciseMinutes: 0,
    sleepHours: 0
  });

  const [healthMessage, setHealthMessage] = useState("");

  // =========================
  // WEEKLY HEALTH DATA
  // =========================

  const [weeklyData, setWeeklyData] = useState([]);

  // =========================
  // PROTECT DASHBOARD
  // =========================

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // =========================
  // GET TODAY'S HABITS
  // =========================

  useEffect(() => {
    const getHabits = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/habits/today",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();

        if (response.ok) {
          setHabits({
            water: data.water || false,
            exercise: data.exercise || false,
            healthyMeal: data.healthyMeal || false,
            sleep: data.sleep || false,
            relaxation: data.relaxation || false
          });
        } else {
          console.error("Unable to load habits:", data.message);
        }
      } catch (error) {
        console.error("Unable to load habits:", error);
      }
    };

    if (token) {
      getHabits();
    }
  }, [token]);

  // =========================
  // GET USER GOALS
  // =========================

  useEffect(() => {
    const getGoals = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/goals",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();

        if (response.ok) {
          setGoals({
            waterGoal: data.waterGoal,
            exerciseGoal: data.exerciseGoal,
            sleepGoal: data.sleepGoal
          });
        } else {
          console.error("Unable to load goals:", data.message);
        }
      } catch (error) {
        console.error("Unable to load goals:", error);
      }
    };

    if (token) {
      getGoals();
    }
  }, [token]);

  // =========================
  // GET TODAY'S HEALTH DATA
  // =========================

  useEffect(() => {
    const getHealthData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/health-data/today",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();

        if (response.ok) {
          setHealthData({
            waterIntake: data.waterIntake || 0,
            exerciseMinutes: data.exerciseMinutes || 0,
            sleepHours: data.sleepHours || 0
          });
        } else {
          console.error(
            "Unable to load health data:",
            data.message
          );
        }
      } catch (error) {
        console.error(
          "Unable to load health data:",
          error
        );
      }
    };

    if (token) {
      getHealthData();
    }
  }, [token]);

  // =========================
  // GET WEEKLY HEALTH DATA
  // =========================

  useEffect(() => {
    const getWeeklyData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/health-data/weekly",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();

        if (response.ok) {
          setWeeklyData(data);
        } else {
          console.error(
            "Unable to load weekly data:",
            data.message
          );
        }
      } catch (error) {
        console.error(
          "Unable to load weekly data:",
          error
        );
      }
    };

    if (token) {
      getWeeklyData();
    }
  }, [token]);

  // =========================
  // SAVE HABITS
  // =========================

  const handleHabitChange = async (habit) => {
    const updatedHabits = {
      ...habits,
      [habit]: !habits[habit]
    };

    setHabits(updatedHabits);

    try {
      const response = await fetch(
        "http://localhost:5000/api/habits",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(updatedHabits)
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Habit saved ✓");

        setTimeout(() => {
          setMessage("");
        }, 1500);
      } else {
        setMessage(data.message || "Unable to save habit.");
      }
    } catch (error) {
      console.error("Habit save error:", error);
      setMessage("Unable to save habit.");
    }
  };

  // =========================
  // SAVE USER GOALS
  // =========================

  const handleGoalSave = async () => {
    setGoalMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/goals",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            waterGoal: Number(goals.waterGoal),
            exerciseGoal: Number(goals.exerciseGoal),
            sleepGoal: Number(goals.sleepGoal)
          })
        }
      );

      const data = await response.json();

      console.log("Goal save response:", data);

      if (response.ok) {
        setGoals({
          waterGoal: Number(data.goals.waterGoal),
          exerciseGoal: Number(data.goals.exerciseGoal),
          sleepGoal: Number(data.goals.sleepGoal)
        });

        setGoalMessage("Goals saved successfully ✓");

        setTimeout(() => {
          setGoalMessage("");
        }, 2000);
      } else {
        setGoalMessage(
          data.message || "Unable to save goals."
        );
      }
    } catch (error) {
      console.error("Goal save error:", error);

      setGoalMessage(
        "Unable to connect to server."
      );
    }
  };

  // =========================
  // SAVE HEALTH DATA
  // =========================

  const handleHealthDataSave = async () => {
    setHealthMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/health-data",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            waterIntake: Number(healthData.waterIntake),
            exerciseMinutes: Number(
              healthData.exerciseMinutes
            ),
            sleepHours: Number(
              healthData.sleepHours
            )
          })
        }
      );

      const data = await response.json();

      console.log(
        "Health data save response:",
        data
      );

      if (response.ok) {
        setHealthData({
          waterIntake: Number(
            data.healthData.waterIntake
          ),
          exerciseMinutes: Number(
            data.healthData.exerciseMinutes
          ),
          sleepHours: Number(
            data.healthData.sleepHours
          )
        });

        setHealthMessage(
          "Today's health data saved ✓"
        );

        setTimeout(() => {
          setHealthMessage("");
        }, 2000);

        // Refresh weekly chart
        const weeklyResponse = await fetch(
          "http://localhost:5000/api/health-data/weekly",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const weeklyResult =
          await weeklyResponse.json();

        if (weeklyResponse.ok) {
          setWeeklyData(weeklyResult);
        }

      } else {
        setHealthMessage(
          data.message ||
            "Unable to save health data."
        );
      }
    } catch (error) {
      console.error(
        "Health data save error:",
        error
      );

      setHealthMessage(
        "Unable to connect to server."
      );
    }
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  // =========================
  // HABIT PROGRESS
  // =========================

  const completedHabits =
    Object.values(habits).filter(Boolean).length;

  const progress = completedHabits * 20;

  // =========================
  // HEALTH PROGRESS
  // =========================

  const waterProgress =
    Number(goals.waterGoal) > 0
      ? Math.min(
          (Number(healthData.waterIntake) /
            Number(goals.waterGoal)) *
            100,
          100
        )
      : 0;

  const exerciseProgress =
    Number(goals.exerciseGoal) > 0
      ? Math.min(
          (Number(healthData.exerciseMinutes) /
            Number(goals.exerciseGoal)) *
            100,
          100
        )
      : 0;

  const sleepProgress =
    Number(goals.sleepGoal) > 0
      ? Math.min(
          (Number(healthData.sleepHours) /
            Number(goals.sleepGoal)) *
            100,
          100
        )
      : 0;

  // =========================
  // TODAY'S DATE
  // =========================

  const today = new Date();

  const formattedDate =
    today.toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );

  // =========================
  // PAGE
  // =========================

  return (
    <main className="dashboard-page">

      {/* HEADER */}

      <section className="dashboard-header">

        <div>

          <p className="small-title">
            YOUR HEALTHYLIFE
          </p>

          <h1>
            Welcome, {user?.name || "User"} 🌿
          </h1>

          <p className="dashboard-date">
            📅 {formattedDate}
          </p>

          <p className="dashboard-description">
            Track your healthy habits and build a
            better routine one day at a time.
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          LOGOUT
        </button>

      </section>


      {/* STAT CARDS */}

      <section className="dashboard-stats">

        <div className="dashboard-stat">

          <span>🌱</span>

          <h3>
            {completedHabits}/5
          </h3>

          <p>
            Habits Completed
          </p>

        </div>


        <div className="dashboard-stat">

          <span>💧</span>

          <h3>
            {goals.waterGoal}L
          </h3>

          <p>
            Water Goal
          </p>

        </div>


        <div className="dashboard-stat">

          <span>🏃</span>

          <h3>
            {goals.exerciseGoal}m
          </h3>

          <p>
            Activity Goal
          </p>

        </div>


        <div className="dashboard-stat">

          <span>😴</span>

          <h3>
            {goals.sleepGoal}h
          </h3>

          <p>
            Sleep Goal
          </p>

        </div>

      </section>


      {/* HABIT PROGRESS */}

      <section className="progress-section">

        <div className="progress-info">

          <div>

            <p className="small-title">
              TODAY'S PROGRESS
            </p>

            <h2>
              You're {progress}% done! 🌱
            </h2>

          </div>

          <strong>
            {completedHabits} / 5
          </strong>

        </div>


        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`
            }}
          />

        </div>


        <p className="progress-text">

          {completedHabits === 5
            ? "Amazing! You completed all your habits today! 🎉"
            : "Keep going! Every small healthy choice counts."
          }

        </p>

      </section>


      {/* HEALTH GOALS */}

      <section className="goals-section">

        <div className="section-heading">

          <p className="small-title">
            PERSONALIZE YOUR ROUTINE
          </p>

          <h2>
            Your Health Goals 🎯
          </h2>

          <p>
            Set goals that work for your daily lifestyle.
          </p>

        </div>


        <div className="goals-card">

          {/* WATER GOAL */}

          <div className="goal-item">

            <label>
              💧 Water Goal
            </label>

            <div className="goal-input">

              <input
                type="number"
                min="1"
                max="10"
                step="0.1"
                value={goals.waterGoal}
                onChange={(e) =>
                  setGoals({
                    ...goals,
                    waterGoal: e.target.value
                  })
                }
              />

              <span>
                Litres / day
              </span>

            </div>

          </div>


          {/* EXERCISE GOAL */}

          <div className="goal-item">

            <label>
              🏃 Exercise Goal
            </label>

            <div className="goal-input">

              <input
                type="number"
                min="5"
                max="300"
                value={goals.exerciseGoal}
                onChange={(e) =>
                  setGoals({
                    ...goals,
                    exerciseGoal: e.target.value
                  })
                }
              />

              <span>
                Minutes / day
              </span>

            </div>

          </div>


          {/* SLEEP GOAL */}

          <div className="goal-item">

            <label>
              😴 Sleep Goal
            </label>

            <div className="goal-input">

              <input
                type="number"
                min="1"
                max="24"
                step="0.5"
                value={goals.sleepGoal}
                onChange={(e) =>
                  setGoals({
                    ...goals,
                    sleepGoal: e.target.value
                  })
                }
              />

              <span>
                Hours / night
              </span>

            </div>

          </div>


          <button
            className="save-goals-btn"
            onClick={handleGoalSave}
          >
            SAVE GOALS
          </button>


          {goalMessage && (
            <p className="goal-message">
              {goalMessage}
            </p>
          )}

        </div>

      </section>


      {/* DAILY HEALTH DATA */}

      <section className="health-data-section">

        <div className="section-heading">

          <p className="small-title">
            DAILY HEALTH DATA
          </p>

          <h2>
            Track Your Actual Progress 📊
          </h2>

          <p>
            Enter what you actually achieved today
            and compare it with your personal goals.
          </p>

        </div>


        <div className="health-data-card">

          {/* WATER */}

          <div className="health-data-item">

            <div className="health-data-icon">
              💧
            </div>

            <div className="health-data-info">

              <h3>
                Water Intake
              </h3>

              <p>
                Goal: {goals.waterGoal} L per day
              </p>

            </div>

            <div className="health-data-input">

              <input
                type="number"
                min="0"
                max="20"
                step="0.1"
                value={healthData.waterIntake}
                onChange={(e) =>
                  setHealthData({
                    ...healthData,
                    waterIntake: e.target.value
                  })
                }
              />

              <span>
                L
              </span>

            </div>

            <div className="health-progress">

              <div className="health-progress-bar">

                <div
                  className="health-progress-fill"
                  style={{
                    width: `${waterProgress}%`
                  }}
                />

              </div>

              <span className="health-progress-text">
                {Math.round(waterProgress)}%
              </span>

            </div>

          </div>


          {/* EXERCISE */}

          <div className="health-data-item">

            <div className="health-data-icon">
              🏃
            </div>

            <div className="health-data-info">

              <h3>
                Exercise
              </h3>

              <p>
                Goal: {goals.exerciseGoal} minutes per day
              </p>

            </div>

            <div className="health-data-input">

              <input
                type="number"
                min="0"
                max="600"
                value={healthData.exerciseMinutes}
                onChange={(e) =>
                  setHealthData({
                    ...healthData,
                    exerciseMinutes:
                      e.target.value
                  })
                }
              />

              <span>
                min
              </span>

            </div>

            <div className="health-progress">

              <div className="health-progress-bar">

                <div
                  className="health-progress-fill"
                  style={{
                    width: `${exerciseProgress}%`
                  }}
                />

              </div>

              <span className="health-progress-text">
                {Math.round(exerciseProgress)}%
              </span>

            </div>

          </div>


          {/* SLEEP */}

          <div className="health-data-item">

            <div className="health-data-icon">
              😴
            </div>

            <div className="health-data-info">

              <h3>
                Sleep
              </h3>

              <p>
                Goal: {goals.sleepGoal} hours per night
              </p>

            </div>

            <div className="health-data-input">

              <input
                type="number"
                min="0"
                max="24"
                step="0.5"
                value={healthData.sleepHours}
                onChange={(e) =>
                  setHealthData({
                    ...healthData,
                    sleepHours: e.target.value
                  })
                }
              />

              <span>
                hrs
              </span>

            </div>

            <div className="health-progress">

              <div className="health-progress-bar">

                <div
                  className="health-progress-fill"
                  style={{
                    width: `${sleepProgress}%`
                  }}
                />

              </div>

              <span className="health-progress-text">
                {Math.round(sleepProgress)}%
              </span>

            </div>

          </div>


          {/* SAVE HEALTH DATA */}

          <button
            className="save-health-btn"
            onClick={handleHealthDataSave}
          >
            SAVE TODAY'S DATA
          </button>


          {healthMessage && (
            <p className="health-message">
              {healthMessage}
            </p>
          )}

        </div>

      </section>


      {/* DAILY HABIT TRACKER */}

      <section className="tracker-section">

        <div className="section-heading">

          <p className="small-title">
            DAILY TRACKER
          </p>

          <h2>
            Today's Healthy Habits 📋
          </h2>

          <p>
            Mark the habits you complete today.
          </p>

        </div>


        <div className="dashboard-tracker">

          {/* WATER */}

          <div className="dashboard-habit">

            <div>

              <span className="habit-emoji">
                💧
              </span>

              <div>

                <h3>
                  Drink Water
                </h3>

                <p>
                  Stay hydrated throughout the day.
                </p>

              </div>

            </div>

            <input
              type="checkbox"
              checked={habits.water}
              onChange={() =>
                handleHabitChange("water")
              }
            />

          </div>


          {/* EXERCISE */}

          <div className="dashboard-habit">

            <div>

              <span className="habit-emoji">
                🏃
              </span>

              <div>

                <h3>
                  Exercise
                </h3>

                <p>
                  Stay active and move your body.
                </p>

              </div>

            </div>

            <input
              type="checkbox"
              checked={habits.exercise}
              onChange={() =>
                handleHabitChange("exercise")
              }
            />

          </div>


          {/* HEALTHY MEAL */}

          <div className="dashboard-habit">

            <div>

              <span className="habit-emoji">
                🥗
              </span>

              <div>

                <h3>
                  Healthy Meal
                </h3>

                <p>
                  Choose nutritious and balanced food.
                </p>

              </div>

            </div>

            <input
              type="checkbox"
              checked={habits.healthyMeal}
              onChange={() =>
                handleHabitChange("healthyMeal")
              }
            />

          </div>


          {/* SLEEP */}

          <div className="dashboard-habit">

            <div>

              <span className="habit-emoji">
                😴
              </span>

              <div>

                <h3>
                  Good Sleep
                </h3>

                <p>
                  Give your body enough time to rest.
                </p>

              </div>

            </div>

            <input
              type="checkbox"
              checked={habits.sleep}
              onChange={() =>
                handleHabitChange("sleep")
              }
            />

          </div>


          {/* RELAXATION */}

          <div className="dashboard-habit">

            <div>

              <span className="habit-emoji">
                🧘
              </span>

              <div>

                <h3>
                  Relaxation
                </h3>

                <p>
                  Take some time to relax and recharge.
                </p>

              </div>

            </div>

            <input
              type="checkbox"
              checked={habits.relaxation}
              onChange={() =>
                handleHabitChange("relaxation")
              }
            />

          </div>

        </div>


        {message && (
          <p className="habit-message">
            {message}
          </p>
        )}

      </section>


      {/* WEEKLY PROGRESS */}

      <section className="weekly-section">

        <div className="section-heading">

          <p className="small-title">
            YOUR LAST 7 DAYS
          </p>

          <h2>
            Weekly Health Progress 📊
          </h2>

          <p>
            See how your daily health data changes
            throughout the week.
          </p>

        </div>


        <div className="weekly-card">

          <div className="chart-title">
            Daily Health Activity
          </div>


          <div className="weekly-chart">

            {weeklyData.map((day) => {

              const exercisePercent =
                Number(goals.exerciseGoal) > 0
                  ? Math.min(
                      (Number(day.exerciseMinutes) /
                        Number(goals.exerciseGoal)) *
                        100,
                      100
                    )
                  : 0;


              const waterPercent =
                Number(goals.waterGoal) > 0
                  ? Math.min(
                      (Number(day.waterIntake) /
                        Number(goals.waterGoal)) *
                        100,
                      100
                    )
                  : 0;


              const sleepPercent =
                Number(goals.sleepGoal) > 0
                  ? Math.min(
                      (Number(day.sleepHours) /
                        Number(goals.sleepGoal)) *
                        100,
                      100
                    )
                  : 0;


              const averageProgress =
                (
                  waterPercent +
                  exercisePercent +
                  sleepPercent
                ) / 3;


              const dayName =
                new Date(
                  `${day.date}T00:00:00`
                ).toLocaleDateString(
                  "en-IN",
                  {
                    weekday: "short"
                  }
                );


              return (

                <div
                  className="chart-day"
                  key={day.date}
                >

                  <div className="chart-bar-container">

                    <div
                      className="chart-bar"
                      style={{
                        height: `${Math.max(
                          averageProgress,
                          3
                        )}%`
                      }}
                    >

                      <span className="chart-value">
                        {Math.round(
                          averageProgress
                        )}%
                      </span>

                    </div>

                  </div>


                  <span className="chart-day-name">
                    {dayName}
                  </span>

                </div>

              );

            })}

          </div>


          <div className="chart-legend">

            <div>

              <span className="legend-dot"></span>

              Overall daily progress

            </div>

            <p>
              Progress is calculated from water,
              exercise and sleep goals.
            </p>

          </div>

        </div>


        {/* WEEKLY DETAILS */}

        <div className="weekly-details">

          {weeklyData.map((day) => {

            const dayName =
              new Date(
                `${day.date}T00:00:00`
              ).toLocaleDateString(
                "en-IN",
                {
                  weekday: "short",
                  day: "numeric"
                }
              );


            return (

              <div
                className="weekly-detail-card"
                key={day.date}
              >

                <h3>
                  {dayName}
                </h3>

                <p>
                  💧 {day.waterIntake} L
                </p>

                <p>
                  🏃 {day.exerciseMinutes} min
                </p>

                <p>
                  😴 {day.sleepHours} hrs
                </p>

              </div>

            );

          })}

        </div>

      </section>


      {/* BOTTOM MESSAGE */}

      <section className="dashboard-message">

        <div>

          <p className="small-title">
            KEEP GOING
          </p>

          <h2>
            Small Steps, Big Changes 🌱
          </h2>

          <p>
            Building a healthy lifestyle is a journey.
            Focus on consistency and celebrate your
            progress every day.
          </p>

        </div>

        <div className="progress-circle">
          {progress}%
        </div>

      </section>

    </main>
  );
}

export default Dashboard;