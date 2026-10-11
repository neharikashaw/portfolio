import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Building2, Calendar, MapPin, CheckCircle2, Layers } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="experience-section" aria-label="Professional Experience">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Career Milestone</div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Hands-on internship training at an established Chartered Accountancy practice in Kolkata.
          </p>
        </div>

        <div className="experience-card-container">
          {portfolioData.experience.map((exp, idx) => (
            <article key={idx} className="timeline-card">
              <div className="timeline-header">
                <div className="timeline-role-info">
                  <h3 className="timeline-role-title">{exp.role}</h3>
                  <div className="timeline-org">
                    <Building2 size={18} className="text-gold" />
                    <span>{exp.organization}</span>
                  </div>
                  <div className="timeline-location" style={{ marginTop: '4px' }}>
                    <MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} />
                    {exp.location}
                  </div>
                </div>

                <div className="timeline-meta-box">
                  <div className="timeline-duration-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <span className="timeline-nature-badge">{exp.type}</span>
                </div>
              </div>

              <p className="timeline-overview">{exp.overview}</p>

              <div>
                <h4 className="timeline-responsibilities-title">Core Responsibilities &amp; Exposure</h4>
                <ul className="timeline-responsibilities-list" role="list">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="resp-item">
                      <div className="resp-icon-box" aria-hidden="true">
                        <CheckCircle2 size={16} />
                      </div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="timeline-deliverables-box">
                <span className="deliverables-label">Key Deliverables &amp; Compliance Workflows</span>
                <div className="deliverables-tags">
                  {exp.deliverables.map((item, dIdx) => (
                    <span key={dIdx} className="deliv-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
