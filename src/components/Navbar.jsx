import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for navigation highlight
      const sections = ['home', 'about', 'expertise', 'experience', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        aria-label="Main Navigation"
      >
        <div className="container navbar-container">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Neharika Shaw Portfolio Home"
          >
            <span className="brand-name">
              {portfolioData.personal.name}
              <span className="brand-dot" aria-hidden="true" />
            </span>
            <span className="brand-tag">Finance &amp; Accounting</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action CTAs */}
          <div className="nav-actions">
            <button
              type="button"
              id="navbar-download-cv-btn"
              className="nav-btn-cv"
              onClick={onOpenResume}
              title="View and Download Neharika Shaw's Resume"
            >
              <FileText size={15} />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer & Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div>
          <div className="mobile-drawer-header">
            <div>
              <span className="brand-name">{portfolioData.personal.name}</span>
              <span className="brand-tag">Finance &amp; Accounting</span>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
              style={{ color: 'var(--color-navy)' }}
            >
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} style={{ opacity: 0.5 }} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-drawer-footer">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
          >
            <Download size={16} />
            <span>Download Official CV</span>
          </button>
          <p style={{ fontSize: '0.78rem', marginTop: '14px', textAlign: 'center' }}>
            {portfolioData.personal.email}
          </p>
        </div>
      </div>
    </>
  );
}
