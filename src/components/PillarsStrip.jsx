import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function PillarsStrip() {
  return (
    <section className="pillars-strip" aria-label="Core Professional Values">
      <div className="container">
        <div className="pillars-grid">
          {portfolioData.personal.values.map((val, idx) => (
            <div key={idx} className="pillar-item">
              <span className="pillar-num" aria-hidden="true">
                0{idx + 1}
              </span>
              <span className="pillar-text">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
