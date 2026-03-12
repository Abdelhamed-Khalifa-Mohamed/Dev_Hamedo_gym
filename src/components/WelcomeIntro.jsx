import './components_css/WelcomeIntro.css';

function WelcomeIntro({ onEnter }) {
  return (
    <section className="welcome-intro" aria-label="Welcome to our website">
      <div className="welcome-glow welcome-glow-left"></div>
      <div className="welcome-glow welcome-glow-right"></div>

      <div className="welcome-card">
        <p className="welcome-tag">Premium Nutrition Store</p>
        <h1>Welcome To Our Website</h1>
        <p className="welcome-subtitle">
          Discover top supplements, proteins, and vitamins with a smooth shopping experience.
        </p>

        <button className="welcome-enter-btn" onClick={onEnter}>
          Explore Products
        </button>
      </div>
    </section>
  );
}

export default WelcomeIntro;
