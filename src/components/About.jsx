import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Briefcase, FileSpreadsheet, FileCheck, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlightIcons = [
    <Award size={18} className="text-gold" />,
    <Briefcase size={18} className="text-gold" />,
    <FileSpreadsheet size={18} className="text-gold" />,
    <FileCheck size={18} className="text-gold" />,
  ];

  return (
    <section id="about" className="about-section" aria-label="About Neharika Shaw">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Professional Profile</div>
          <h2 className="section-title">Dedication to Accounting Rigor &amp; Financial Precision</h2>
          <p className="section-subtitle">
            Grounding theoretical commerce concepts in practical accounting operations,
            statutory tax procedures, and methodical financial reporting.
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="about-grid">
          {/* Column 1: Editorial Lead & Key Metric Table */}
          <div className="about-col-left">
            <blockquote className="about-editorial-lead">
              &ldquo;{portfolioData.about.leadParagraph}&rdquo;
            </blockquote>

            <p className="about-narrative">
              {portfolioData.about.bodyParagraph}
            </p>

            {/* Structured At-A-Glance Metric Box */}
            <div className="about-metrics-box">
              <div className="about-metrics-grid">
                {portfolioData.about.metrics.map((m, idx) => (
                  <div key={idx} className="metric-cell">
                    <span className="metric-label">{m.label}</span>
                    <span className="metric-value">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Understated Highlight Items */}
          <div className="about-col-right">
            <div className="about-highlights-grid">
              {portfolioData.about.highlights.map((item, idx) => (
                <div key={idx} className="about-highlight-card">
                  <div className="highlight-header">
                    <h3 className="highlight-title">{item.title}</h3>
                    <span className="highlight-subtitle">{item.subtitle}</span>
                  </div>
                  <p className="highlight-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
