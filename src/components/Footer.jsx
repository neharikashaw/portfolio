import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">{portfolioData.personal.name}</div>
            <div className="footer-brand-title">Commerce Graduate &bull; Accounting Professional</div>
          </div>

          <ul className="footer-links" role="list">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="footer-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onClick={onOpenResume}
              >
                Curriculum Vitae
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved. Professional Portfolio.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
