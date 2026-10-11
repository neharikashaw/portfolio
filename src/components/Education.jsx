import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, BookCheck } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="education-section" aria-label="Academic Qualifications">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow">Academic Background</div>
          <h2 className="section-title">Education &amp; Credentials</h2>
          <p className="section-subtitle">
            Solid foundation in Commerce, Financial Accounting, and Business Studies through structured academics.
          </p>
        </div>

        <div className="education-timeline-wrap">
          <div className="edu-timeline-line" aria-hidden="true" />

          <div className="education-items-list">
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="edu-item-row">
                <div className="edu-marker-box" aria-hidden="true">
                  <GraduationCap size={26} />
                </div>

                <div className="edu-content-card">
                  <div className="edu-top-meta">
                    <h3 className="edu-degree-title">{edu.degree}</h3>
                    <span className="edu-score-badge">{edu.score}</span>
                  </div>

                  <div className="edu-institution">{edu.institution}</div>
                  <span className="edu-duration-label">
                    {edu.duration} &bull; {edu.type}
                  </span>

                  <p className="edu-focus-text">
                    <strong>Focus:</strong> {edu.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
