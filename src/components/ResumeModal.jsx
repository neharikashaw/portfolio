import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadFile = () => {
    const element = document.createElement('a');
    element.href = '/Neharika_Shaw_Resume.html';
    element.download = 'Neharika_Shaw_Resume.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Action Bar */}
        <div className="modal-header">
          <div className="modal-header-title" id="resume-modal-title">
            <span>Curriculum Vitae — {portfolioData.personal.name}</span>
          </div>
          <div className="modal-header-actions">
            <button
              type="button"
              className="btn btn-gold"
              style={{ padding: '8px 14px', fontSize: '0.78rem' }}
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              style={{
                padding: '8px 14px',
                fontSize: '0.78rem',
                borderColor: 'rgba(248, 246, 240, 0.4)',
                color: 'var(--color-ivory)'
              }}
              onClick={handleDownloadFile}
              title="Download Offline Copy"
            >
              <Download size={15} />
              <span>Download File</span>
            </button>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close Resume Preview"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Modal Document Body */}
        <div className="modal-body">
          <div className="resume-doc" id="printable-resume">
            {/* Header */}
            <div className="resume-doc-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <img
                src={portfolioData.personal.photo}
                alt={portfolioData.personal.name}
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: '50% 15%',
                  border: '2px solid #B89A62',
                  boxShadow: '0 4px 12px rgba(20, 43, 59, 0.12)',
                  flexShrink: 0
                }}
              />
              <div style={{ textAlign: 'left' }}>
                <h1 className="resume-candidate-name" style={{ textAlign: 'left' }}>{portfolioData.personal.name}</h1>
                <div className="resume-candidate-sub">
                  Commerce Graduate &bull; Accounting Professional
                </div>
                <div className="resume-contact-bar" style={{ justifyContent: 'flex-start' }}>
                  <span>{portfolioData.personal.email}</span>
                  <span>&bull;</span>
                  <span>{portfolioData.personal.phoneDisplay}</span>
                  <span>&bull;</span>
                  <span>{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="resume-sec">
              <h2 className="resume-sec-title">Professional Summary</h2>
              <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: 1.65 }}>
                {portfolioData.personal.summary}
              </p>
            </div>

            {/* Professional Experience */}
            <div className="resume-sec">
              <h2 className="resume-sec-title">Professional Experience</h2>
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} style={{ marginBottom: '16px' }}>
                  <div className="resume-item-headline">
                    <span className="resume-item-role">{exp.role}</span>
                    <span className="resume-item-dates">{exp.period}</span>
                  </div>
                  <div className="resume-item-org">
                    {exp.organization}, {exp.location}
                  </div>
                  <ul className="resume-bullets">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="resume-sec">
              <h2 className="resume-sec-title">Education</h2>
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} style={{ marginBottom: '14px' }}>
                  <div className="resume-item-headline">
                    <span className="resume-item-role">{edu.degree}</span>
                    <span className="resume-item-dates">{edu.duration}</span>
                  </div>
                  <div className="resume-item-org">{edu.institution}</div>
                  <div style={{ fontSize: '0.84rem', color: '#444' }}>
                    <strong>Score:</strong> {edu.score} &bull; <strong>Key Focus:</strong>{' '}
                    {edu.focus}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills & Tools */}
            <div className="resume-sec">
              <h2 className="resume-sec-title">Skills &amp; Technical Competencies</h2>
              {portfolioData.skillsByCategory.map((cat, idx) => (
                <div key={idx} style={{ marginBottom: '8px', fontSize: '0.88rem' }}>
                  <strong style={{ color: '#142B3B' }}>{cat.category}: </strong>
                  <span style={{ color: '#444' }}>{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>

            {/* Languages Known */}
            <div className="resume-sec">
              <h2 className="resume-sec-title">Languages Known</h2>
              <p style={{ fontSize: '0.88rem', color: '#444' }}>
                {portfolioData.languages.map((l) => `${l.name} (${l.proficiency})`).join(' • ')}
              </p>
            </div>

            {/* Personal Interests / Hobbies */}
            <div className="resume-sec" style={{ marginBottom: 0 }}>
              <h2 className="resume-sec-title">Hobbies &amp; Personal Interests</h2>
              <p style={{ fontSize: '0.88rem', color: '#444' }}>
                {portfolioData.interests.map((i) => i.title).join(' • ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
