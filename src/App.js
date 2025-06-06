import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
  <img src="s.png" alt="Cross App Logo" className="logo-img" />CROSS</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#preview">App Preview</a>
        </div>
        <button className="get-started">Get Started</button>
      </nav>

      <main className="hero">
        <div className="left">
          <h1><span className="highlight">Guiding</span> Your<br />Spiritual Journey<br />Every Day</h1>
          <p>
            Stay connected with the Word of God, community<br />
            activities, and reflections — all in one place with the<br />
            CROSS app.
          </p>
          <div className="buttons">
            <button className="btn primary">Download Now</button>
            <button className="btn secondary">Learn More</button>
          </div>
        </div>

       <div className="right">
  <div className="phone-frame">
    <img src="/cross.jpg" alt="App preview" className="mockup" />
  </div>
</div>

      </main>
    </div>
  );
}

export default App;
