import React from 'react';
import { FileDown, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Hero Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" aria-hidden="true" />
              <span>{portfolioData.personal.tagline}</span>
            </div>

            <h1 className="hero-title">
              Building a Foundation in{' '}
              <span className="accent-serif">Finance, Accounting</span> &amp; Taxation.
            </h1>

            <p className="hero-description">
              Hello, I am <strong>{portfolioData.personal.name}</strong>—an accounting and taxation professional
              with 1+ years of audit experience at R.P. Boobna &amp; Co., Chartered Accountants. Experienced in
              balance sheet preparation, GST &amp; TDS compliance, and income tax return filing.
            </p>

            <div className="hero-actions">
              <a
                href="#about"
                className="btn btn-primary"
                id="hero-explore-btn"
                onClick={scrollToAbout}
              >
                <Compass size={17} />
                <span>Explore My Journey</span>
              </a>

              <button
                type="button"
                className="btn btn-gold"
                id="hero-download-resume-btn"
                onClick={onOpenResume}
              >
                <FileDown size={17} />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="hero-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>{portfolioData.personal.statusBadge}</span>
            </div>
          </div>

          {/* Right Column: Clean, Stylish Portrait Frame Without Text Overlay */}
          <div className="hero-visual-wrapper">
            <div className="portrait-backdrop-glow" aria-hidden="true" />

            <div
              className="hero-portrait-card"
              role="region"
              aria-label="Professional Profile Frame"
            >
              <div className="hero-portrait-inner">
                {/* Candidate Photo */}
                <img
                  src={portfolioData.personal.photo}
                  alt={`Portrait of ${portfolioData.personal.name}`}
                  className="portrait-custom-img"
                />

                {/* Elegant Geometric Corner Accents */}
                <div className="portrait-frame-corners" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
