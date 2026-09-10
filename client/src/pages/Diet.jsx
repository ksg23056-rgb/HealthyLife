function Diet() {
  return (
    <main className="diet-page">

      {/* Page Header */}
      <section className="page-header">
        <p className="small-title">DIET & NUTRITION</p>

        <h1>Fuel Your Body with Better Choices 🥗</h1>

        <p>
          Discover simple ways to build a balanced diet and make
          nutritious food choices every day.
        </p>
      </section>

      {/* Introduction */}
      <section className="diet-intro">

        <div className="diet-intro-content">
          <p className="small-title">EAT WELL • LIVE WELL</p>

          <h2>What is a Balanced Diet?</h2>

          <p>
            A balanced diet provides your body with the nutrients,
            vitamins and minerals it needs to stay healthy and active.
          </p>

          <p>
            A healthy eating pattern includes a variety of foods from
            different food groups instead of depending on only one type
            of food.
          </p>

          <p>
            The goal is not to completely avoid your favourite foods,
            but to maintain balance and make nutritious choices most
            of the time.
          </p>
        </div>

        <div className="nutrition-card">
          <div className="nutrition-icon">🥗</div>

          <h3>Eat a Rainbow</h3>

          <p>
            Include different coloured fruits and vegetables
            for a variety of nutrients.
          </p>
        </div>

      </section>

      {/* Food Groups */}
      <section className="food-groups">

        <div className="section-heading">
          <p className="small-title">NUTRITION BASICS</p>

          <h2>Important Food Groups</h2>

          <p>
            A varied diet can include foods from several important
            food groups.
          </p>
        </div>

        <div className="food-grid">

          <div className="food-card">
            <span>🍎</span>
            <h3>Fruits</h3>
            <p>
              Fruits provide vitamins, minerals, fibre and
              natural sources of energy.
            </p>
          </div>

          <div className="food-card">
            <span>🥦</span>
            <h3>Vegetables</h3>
            <p>
              Include a variety of vegetables to add important
              nutrients and fibre to your meals.
            </p>
          </div>

          <div className="food-card">
            <span>🌾</span>
            <h3>Whole Grains</h3>
            <p>
              Whole grains such as oats, brown rice and whole
              wheat can provide energy and fibre.
            </p>
          </div>

          <div className="food-card">
            <span>🥛</span>
            <h3>Dairy & Alternatives</h3>
            <p>
              Milk, curd and suitable alternatives can provide
              nutrients such as calcium and protein.
            </p>
          </div>

          <div className="food-card">
            <span>🥜</span>
            <h3>Protein Foods</h3>
            <p>
              Include options such as pulses, beans, eggs,
              nuts, seeds and other protein-rich foods.
            </p>
          </div>

          <div className="food-card">
            <span>💧</span>
            <h3>Water</h3>
            <p>
              Stay hydrated throughout the day and choose water
              as your main drink whenever possible.
            </p>
          </div>

        </div>

      </section>

      {/* Healthy Eating Tips */}
      <section className="diet-tips">

        <div className="section-heading">
          <p className="small-title">EASY CHANGES</p>

          <h2>Healthy Eating Tips 🌱</h2>
        </div>

        <div className="tips-container">

          <div className="tip">
            <span>01</span>
            <div>
              <h3>Include More Fruits & Vegetables</h3>
              <p>
                Add different fruits and vegetables to your daily meals.
              </p>
            </div>
          </div>

          <div className="tip">
            <span>02</span>
            <div>
              <h3>Choose Whole Foods</h3>
              <p>
                Prefer minimally processed foods and a variety of
                nutritious ingredients.
              </p>
            </div>
          </div>

          <div className="tip">
            <span>03</span>
            <div>
              <h3>Drink Enough Water</h3>
              <p>
                Keep water available and drink regularly throughout
                the day.
              </p>
            </div>
          </div>

          <div className="tip">
            <span>04</span>
            <div>
              <h3>Eat Mindfully</h3>
              <p>
                Pay attention to hunger, fullness and the food
                you are eating.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Sample Meal */}
      <section className="meal-section">

        <div className="section-heading">
          <p className="small-title">MEAL IDEA</p>

          <h2>A Simple Balanced Meal 🍽️</h2>

          <p>
            Here is an example of how different food groups can
            be combined into a balanced meal.
          </p>
        </div>

        <div className="meal-card">

          <div className="meal-item">
            <span>🥗</span>
            <h3>Vegetables</h3>
            <p>Seasonal vegetables or salad</p>
          </div>

          <div className="meal-item">
            <span>🌾</span>
            <h3>Grains</h3>
            <p>Roti, brown rice or another whole grain</p>
          </div>

          <div className="meal-item">
            <span>🥣</span>
            <h3>Protein</h3>
            <p>Dal, beans, paneer, eggs or another protein source</p>
          </div>

          <div className="meal-item">
            <span>🍎</span>
            <h3>Fruit</h3>
            <p>A seasonal fruit as part of the meal or snack</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="diet-cta">

        <h2>Healthy Eating Starts with Small Choices 🌿</h2>

        <p>
          Build better eating habits one meal at a time.
        </p>

        <a href="/exercise" className="primary-btn">
          Explore Exercise →
        </a>

      </section>

    </main>
  );
}

export default Diet;