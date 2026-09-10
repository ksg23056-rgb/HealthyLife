function Home() {
  return (
    <>
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
            <a href="/about" className="primary-btn">
              Explore Healthy Living →
            </a>

            <a href="/habits" className="secondary-btn">
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
              <strong>3L</strong>
              <span>Water</span>
            </div>

            <div>
              <strong>30m</strong>
              <span>Exercise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Healthy Lifestyle Introduction */}
      <section className="section">
        <div className="section-heading">
          <p className="small-title">HEALTHY LIVING</p>

          <h2>What is a Healthy Lifestyle?</h2>

          <p>
            A healthy lifestyle is about creating balanced habits
            that support your physical and mental well-being.
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

      {/* Explore Sections */}
      <section className="habits-section">
        <div className="section-heading">
          <p className="small-title">EXPLORE HEALTHY LIVING</p>

          <h2>Build a Healthier You 🌿</h2>

          <p>
            Explore different areas of a healthy lifestyle and
            discover simple habits you can follow every day.
          </p>
        </div>

        <div className="habit-list">
          <div>
            🥗 <a href="/diet">Diet & Nutrition</a>
          </div>

          <div>
            🏃 <a href="/exercise">Exercise & Fitness</a>
          </div>

          <div>
            😴 <a href="/sleep">Sleep & Recovery</a>
          </div>

          <div>
            🧠 <a href="/wellness">Mental Wellness</a>
          </div>

          <div>
            ✅ <a href="/habits">Daily Healthy Habits</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;