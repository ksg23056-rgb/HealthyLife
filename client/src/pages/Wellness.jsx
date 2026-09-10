function Wellness() {
  return (
    <main className="wellness-page">

      {/* Page Header */}
      <section className="page-header">
        <p className="small-title">MENTAL WELLNESS</p>

        <h1>Take Care of Your Mind, Too 🧠</h1>

        <p>
          Discover simple habits that can support a calm, balanced
          and positive approach to everyday life.
        </p>
      </section>

      {/* Introduction */}
      <section className="wellness-intro">

        <div className="wellness-intro-content">
          <p className="small-title">MIND • BODY • BALANCE</p>

          <h2>What is Mental Wellness?</h2>

          <p>
            Mental wellness is an important part of a healthy lifestyle.
            It involves taking care of your thoughts, emotions and
            overall well-being.
          </p>

          <p>
            Looking after your mental well-being can include getting
            enough rest, staying connected with people you care about,
            enjoying hobbies and making time to relax.
          </p>

          <p>
            Everyone experiences difficult days. Taking small steps
            to care for yourself can help you build healthier
            everyday habits.
          </p>
        </div>

        <div className="wellness-card">
          <div className="wellness-icon">🧠</div>

          <h3>Give Your Mind a Break</h3>

          <p>
            Make time for yourself, relax and focus on the things
            that help you feel refreshed.
          </p>
        </div>

      </section>

      {/* Wellness Areas */}
      <section className="wellness-areas">

        <div className="section-heading">
          <p className="small-title">MENTAL WELL-BEING</p>

          <h2>Ways to Support Your Mental Wellness 🌱</h2>

          <p>
            Simple everyday activities can help you create a
            healthier and more balanced routine.
          </p>
        </div>

        <div className="wellness-grid">

          <div className="wellness-feature">
            <span>🧘</span>
            <h3>Mindfulness</h3>
            <p>
              Take a few quiet moments to focus on the present
              and become aware of your thoughts and surroundings.
            </p>
          </div>

          <div className="wellness-feature">
            <span>🎨</span>
            <h3>Hobbies</h3>
            <p>
              Spend time doing activities you enjoy, such as
              drawing, music, reading or creative activities.
            </p>
          </div>

          <div className="wellness-feature">
            <span>👨‍👩‍👧</span>
            <h3>Connections</h3>
            <p>
              Stay connected with friends, family and people
              who make you feel supported.
            </p>
          </div>

          <div className="wellness-feature">
            <span>🌳</span>
            <h3>Time Outdoors</h3>
            <p>
              Spending time outside and enjoying nature can be
              a refreshing part of your daily routine.
            </p>
          </div>

          <div className="wellness-feature">
            <span>😴</span>
            <h3>Rest</h3>
            <p>
              Give yourself enough time to rest and recover from
              the demands of everyday life.
            </p>
          </div>

          <div className="wellness-feature">
            <span>💬</span>
            <h3>Talk About Feelings</h3>
            <p>
              Talking to someone you trust can help you express
              your thoughts and feelings.
            </p>
          </div>

        </div>

      </section>

      {/* Daily Wellness Tips */}
      <section className="wellness-tips">

        <div className="section-heading">
          <p className="small-title">DAILY WELLNESS</p>

          <h2>Small Habits for a Healthier Mind 🌿</h2>
        </div>

        <div className="wellness-tip-list">

          <div className="wellness-tip">
            <span>01</span>

            <div>
              <h3>Take Short Breaks</h3>
              <p>
                Give yourself short breaks during busy periods
                to rest and recharge.
              </p>
            </div>
          </div>

          <div className="wellness-tip">
            <span>02</span>

            <div>
              <h3>Practice Gratitude</h3>
              <p>
                Take a moment to notice and appreciate positive
                things in your everyday life.
              </p>
            </div>
          </div>

          <div className="wellness-tip">
            <span>03</span>

            <div>
              <h3>Spend Time Doing What You Enjoy</h3>
              <p>
                Make time for hobbies and activities that help
                you relax and feel refreshed.
              </p>
            </div>
          </div>

          <div className="wellness-tip">
            <span>04</span>

            <div>
              <h3>Stay Connected</h3>
              <p>
                Make time to communicate with friends, family
                or other trusted people.
              </p>
            </div>
          </div>

          <div className="wellness-tip">
            <span>05</span>

            <div>
              <h3>Make Time for Yourself</h3>
              <p>
                Include some quiet personal time in your routine
                whenever possible.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Quick Reset */}
      <section className="reset-section">

        <div className="section-heading">
          <p className="small-title">QUICK RESET</p>

          <h2>Take a Moment to Pause 🧘</h2>

          <p>
            When your day feels busy, try a simple reset.
          </p>
        </div>

        <div className="reset-grid">

          <div className="reset-card">
            <span>🌬️</span>
            <h3>Breathe</h3>
            <p>
              Take a few slow, comfortable breaths and relax.
            </p>
          </div>

          <div className="reset-card">
            <span>💧</span>
            <h3>Hydrate</h3>
            <p>
              Drink some water and take a short break.
            </p>
          </div>

          <div className="reset-card">
            <span>🚶</span>
            <h3>Move</h3>
            <p>
              Stand up, stretch or take a short walk.
            </p>
          </div>

          <div className="reset-card">
            <span>🌿</span>
            <h3>Relax</h3>
            <p>
              Step away from distractions and give yourself
              a quiet moment.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="wellness-cta">

        <h2>A Healthy Life Includes a Healthy Mind 🌿</h2>

        <p>
          Take care of your mental well-being as part of your
          everyday healthy lifestyle.
        </p>

        <a href="/habits" className="primary-btn">
          Explore Daily Habits →
        </a>

      </section>

    </main>
  );
}

export default Wellness;