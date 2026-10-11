import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Calculator,
  BookOpen,
  Receipt,
  FileSpreadsheet,
  Boxes,
  Table
} from 'lucide-react';

export default function Expertise() {
  const getIcon = (id) => {
    switch (id) {
      case 'fin-acc':
        return <Calculator size={22} />;
      case 'bookkeeping':
        return <BookOpen size={22} />;
      case 'gst-tax':
        return <Receipt size={22} />;
      case 'fin-rep':
        return <FileSpreadsheet size={22} />;
      case 'tally-inv':
        return <Boxes size={22} />;
      case 'excel-data':
        return <Table size={22} />;
      default:
        return <Calculator size={22} />;
    }
  };

  return (
    <section id="expertise" className="expertise-section" aria-label="Core Areas of Expertise">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow">Practical Domain Capabilities</div>
          <h2 className="section-title">Core Areas of Expertise</h2>
          <p className="section-subtitle">
            Systematic competencies developed across academic commerce coursework and practical CA firm training.
          </p>
        </div>

        <div className="expertise-grid">
          {portfolioData.expertise.map((item) => (
            <article key={item.id} className="expertise-card">
              <div className="expertise-card-top">
                <div className="expertise-icon-box" aria-hidden="true">
                  {getIcon(item.id)}
                </div>
                <span className="expertise-number">{item.number}</span>
              </div>

              <h3 className="expertise-title">{item.title}</h3>
              <span className="expertise-subtitle">{item.subtitle}</span>

              <p className="expertise-desc">{item.description}</p>

              <ul className="expertise-capabilities-list" role="list">
                {item.keyCapabilities.map((cap, cIdx) => (
                  <li key={cIdx} className="capability-item">
                    <span className="capability-bullet" aria-hidden="true">&#9670;</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
