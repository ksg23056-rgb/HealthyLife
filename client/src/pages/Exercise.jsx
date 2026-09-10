function Exercise() {
  return (
    <main className="exercise-page">

      {/* Page Header */}
      <section className="page-header">
        <p className="small-title">EXERCISE & FITNESS</p>

        <h1>Move Your Body, Improve Your Life 🏃</h1>

        <p>
          Discover simple ways to stay active, build strength and
          make physical activity a regular part of your lifestyle.
        </p>
      </section>

      {/* Introduction */}
      <section className="exercise-intro">

        <div className="exercise-intro-content">
          <p className="small-title">STAY ACTIVE • STAY HEALTHY</p>

          <h2>Why is Exercise Important?</h2>

          <p>
            Regular physical activity can support your overall health,
            fitness and well-being. It can also help you feel more
            energetic and active during the day.
          </p>

          <p>
            Exercise does not always have to mean going to a gym.
            Walking, cycling, dancing, sports, stretching and other
            activities can all help you stay active.
          </p>

          <p>
            The most important thing is to choose activities you enjoy
            and make movement a regular part of your routine.
          </p>
        </div>

        <div className="exercise-card">
          <div className="exercise-icon">🏃</div>

          <h3>Keep Moving</h3>

          <p>
            Every movement counts. Start small and stay consistent.
          </p>
        </div>

      </section>

      {/* Types of Exercise */}
      <section className="exercise-types">

        <div className="section-heading">
          <p className="small-title">FITNESS BASICS</p>

          <h2>Different Types of Exercise</h2>

          <p>
            A balanced fitness routine can include different types
            of physical activity.
          </p>
        </div>

        <div className="exercise-grid">

          <div className="exercise-feature">
            <span>🏃</span>
            <h3>Cardio</h3>
            <p>
              Walking, jogging, cycling, swimming and dancing can
              improve cardiovascular fitness.
            </p>
          </div>

          <div className="exercise-feature">
            <span>💪</span>
            <h3>Strength Training</h3>
            <p>
              Strength exercises can help develop stronger muscles
              and improve physical fitness.
            </p>
          </div>

          <div className="exercise-feature">
            <span>🧘</span>
            <h3>Flexibility</h3>
            <p>
              Stretching and flexibility exercises can help improve
              mobility and movement.
            </p>
          </div>

          <div className="exercise-feature">
            <span>🚴</span>
            <h3>Outdoor Activities</h3>
            <p>
              Cycling, hiking, sports and outdoor games are enjoyable
              ways to stay active.
            </p>
          </div>

          <div className="exercise-feature">
            <span>🧍</span>
            <h3>Daily Movement</h3>
            <p>
              Walking, taking the stairs and moving regularly during
              the day can reduce long periods of inactivity.
            </p>
          </div>

          <div className="exercise-feature">
            <span>⚡</span>
            <h3>Active Lifestyle</h3>
            <p>
              Combine different activities to create an active and
              enjoyable daily routine.
            </p>
          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="exercise-benefits">

        <div className="section-heading">
          <p className="small-title">BENEFITS</p>

          <h2>How Exercise Can Help 🌟</h2>
        </div>

        <div className="benefits-list">

          <div className="benefit">
            <span>01</span>
            <div>
              <h3>Supports Physical Fitness</h3>
              <p>
                Regular movement can help improve strength,
                endurance and overall fitness.
              </p>
            </div>
          </div>

          <div className="benefit">
            <span>02</span>
            <div>
              <h3>Boosts Energy</h3>
              <p>
                Staying active can help you feel more energetic
                throughout the day.
              </p>
            </div>
          </div>

          <div className="benefit">
            <span>03</span>
            <div>
              <h3>Supports Mental Well-being</h3>
              <p>
                Physical activity can be a positive part of
                maintaining mental well-being.
              </p>
            </div>
          </div>

          <div className="benefit">
            <span>04</span>
            <div>
              <h3>Improves Daily Movement</h3>
              <p>
                Regular activity can make everyday physical
                tasks easier and more comfortable.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Daily Exercise Ideas */}
      <section className="exercise-routine">

        <div className="section-heading">
          <p className="small-title">GET STARTED</p>

          <h2>Simple Daily Activity Ideas ⏱️</h2>

          <p>
            You can start with simple activities and gradually
            build a routine that works for you.
          </p>
        </div>

        <div className="routine-grid">

          <div className="routine-card">
            <span>🚶</span>
            <h3>Take a Walk</h3>
            <p>
              Add a walk to your daily routine whenever possible.
            </p>
          </div>

          <div className="routine-card">
            <span>🧘</span>
            <h3>Stretch</h3>
            <p>
              Take short breaks to stretch and move your body.
            </p>
          </div>

          <div className="routine-card">
            <span>🎵</span>
            <h3>Dance</h3>
            <p>
              Put on your favourite music and enjoy some movement.
            </p>
          </div>

          <div className="routine-card">
            <span>⚽</span>
            <h3>Play a Sport</h3>
            <p>
              Enjoy sports or outdoor games with friends and family.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="exercise-cta">

        <h2>Make Movement Part of Your Day 🌿</h2>

        <p>
          Start with small activities and build a routine you enjoy.
        </p>

        <a href="/sleep" className="primary-btn">
          Explore Sleep & Recovery →
        </a>

      </section>

    </main>
  );
}

export default Exercise;