import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { PenTool, Music, MonitorCheck } from 'lucide-react';

export default function Interests() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <PenTool size={22} />;
      case 1:
        return <Music size={22} />;
      case 2:
        return <MonitorCheck size={22} />;
      default:
        return <PenTool size={22} />;
    }
  };

  return (
    <section className="interests-section" aria-label="Hobbies and Personal Interests">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <div className="section-eyebrow">Beyond Accounting</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}>
            Hobbies &amp; Personal Interests
          </h2>
          <p className="section-subtitle">
            Creative, musical, and digital pursuits that enrich focus, patience, and analytical discipline.
          </p>
        </div>

        <div className="interests-grid">
          {portfolioData.interests.map((item, idx) => (
            <div key={idx} className="interest-item-card">
              <div className="interest-icon-wrap" aria-hidden="true">
                {getIcon(idx)}
              </div>
              <h3 className="interest-title">{item.title}</h3>
              <p className="interest-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
