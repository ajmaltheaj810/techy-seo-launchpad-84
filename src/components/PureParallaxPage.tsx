
import React from 'react';

const PureParallaxPage = () => {
  return (
    <div className="parallax-container">
      {/* Floating Badge */}
      <div className="floating-badge">
        <a 
          href="https://twitter.com/tstechy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="badge-link"
        >
          Follow @TSTechY
        </a>
      </div>

      {/* First Section - Parallax Header */}
      <header className="parallax-section first-section">
        <h1 className="parallax-heading first-heading">
          Transform Your Digital Presence
        </h1>
      </header>

      {/* Second Section - Static Buffer */}
      <section className="static-section">
        <div className="static-content">
          <h2>Our SEO Services Drive Real Results</h2>
          <p>
            At TS Techy, we combine cutting-edge technology with proven strategies 
            to help businesses achieve remarkable growth through search engine optimization. 
            Our data-driven approach ensures your website not only ranks higher but 
            converts visitors into customers.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Keyword Research</h3>
              <p>Advanced keyword analysis to target high-value search terms</p>
            </div>
            <div className="feature-card">
              <h3>Technical SEO</h3>
              <p>Complete optimization of your website's technical foundation</p>
            </div>
            <div className="feature-card">
              <h3>Content Strategy</h3>
              <p>Strategic content creation that ranks and converts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Slower Parallax */}
      <section className="parallax-section third-section">
        <h2 className="parallax-heading third-heading">
          Ready to Scale Your Business?
        </h2>
        <div className="cta-content">
          <p>Join hundreds of successful businesses that have grown with our expertise</p>
          <button className="cta-button">Start Your Journey</button>
        </div>
      </section>
    </div>
  );
};

export default PureParallaxPage;
