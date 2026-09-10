function About() {
  return (
    <main className="about-page">

      {/* Page Header */}
      <section className="page-header">
        <p className="small-title">ABOUT HEALTHYLIFE</p>

        <h1>Build a Healthier Life, One Habit at a Time 🌿</h1>

        <p>
          HealthyLife is a simple platform designed to help you
          understand healthy living and develop better everyday habits.
        </p>
      </section>

      {/* What is Healthy Lifestyle */}
      <section className="about-section">

        <div className="about-content">
          <p className="small-title">HEALTHY LIFESTYLE</p>

          <h2>What Does Healthy Living Mean?</h2>

          <p>
            A healthy lifestyle means taking care of both your body
            and your mind through balanced daily choices.
          </p>

          <p>
            It includes eating nutritious food, staying physically
            active, getting enough sleep, drinking enough water and
            taking care of your mental well-being.
          </p>

          <p>
            You do not need to make huge changes overnight. Small,
            consistent improvements can help create long-lasting
            healthy habits.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🌱</div>

          <h3>Small Steps</h3>

          <p>
            Healthy living is a journey, not a destination.
          </p>
        </div>

      </section>

      {/* Main Areas */}
      <section className="about-areas">

        <div className="section-heading">
          <p className="small-title">OUR FOCUS</p>

          <h2>Five Important Areas of Healthy Living</h2>

          <p>
            HealthyLife focuses on different areas that contribute
            to a balanced and healthy lifestyle.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-feature">
            <span>🥗</span>
            <h3>Diet & Nutrition</h3>
            <p>
              Learn about balanced nutrition and healthy food choices.
            </p>
          </div>

          <div className="about-feature">
            <span>🏃</span>
            <h3>Exercise & Fitness</h3>
            <p>
              Discover simple ways to stay active and improve fitness.
            </p>
          </div>

          <div className="about-feature">
            <span>😴</span>
            <h3>Sleep & Recovery</h3>
            <p>
              Understand the importance of quality sleep and recovery.
            </p>
          </div>

          <div className="about-feature">
            <span>💧</span>
            <h3>Hydration</h3>
            <p>
              Learn why proper hydration is an important part of health.
            </p>
          </div>

          <div className="about-feature">
            <span>🧠</span>
            <h3>Mental Wellness</h3>
            <p>
              Explore simple ways to support your mental well-being.
            </p>
          </div>

        </div>

      </section>

      {/* Closing Section */}
      <section className="about-cta">

        <h2>Start Your HealthyLife Journey 🌿</h2>

        <p>
          Explore our guides and begin building simple,
          healthier habits for everyday life.
        </p>

        <a href="/habits" className="primary-btn">
          Explore Healthy Habits →
        </a>

      </section>

    </main>
  );
}

export default About;