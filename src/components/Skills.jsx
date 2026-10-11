import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Languages } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-label="Technical and Professional Skills">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Competency Matrix</div>
          <h2 className="section-title">Tools &amp; Capabilities</h2>
          <p className="section-subtitle">
            Curated accounting methods, taxation procedures, compliance tools, and professional competencies.
          </p>
        </div>

        {/* Skills Categorized Grid */}
        <div className="skills-categories-grid">
          {portfolioData.skillsByCategory.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-cat-header">
                <h3 className="skill-cat-title">{cat.category}</h3>
                <p className="skill-cat-desc">{cat.description}</p>
              </div>

              <div className="skill-pills-list">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    <span className="skill-pill-dot" aria-hidden="true" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Box */}
        <div
          className="languages-strip-box"
          style={{
            marginTop: '40px',
            padding: '24px 30px',
            backgroundColor: 'var(--color-white)',
            border: '1px solid rgba(20, 43, 59, 0.08)',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '18px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '2px',
                backgroundColor: 'rgba(20, 43, 59, 0.04)',
                border: '1px solid rgba(184, 154, 98, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-navy)'
              }}
              aria-hidden="true"
            >
              <Languages size={20} />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--color-navy)',
                  marginBottom: '2px'
                }}
              >
                Languages Known
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--color-slate-muted)' }}>
                Professional communication &amp; fluency
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {portfolioData.languages.map((lang, idx) => (
              <div
                key={idx}
                style={{
                  padding: '8px 18px',
                  backgroundColor: 'var(--color-ivory)',
                  border: '1px solid var(--color-gold-border)',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.92rem' }}>
                  {lang.name}
                </span>
                <span
                  style={{
                    fontSize: '0.74rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    fontWeight: 700
                  }}
                >
                  ({lang.proficiency})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
