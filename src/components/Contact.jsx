import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState({
    isSubmitted: false,
    hasCopied: false,
    mailtoUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    const subjectLine = encodeURIComponent(
      formData.subject.trim() || `Inquiry from ${formData.name.trim()} via Portfolio`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailto = `mailto:${portfolioData.contact.email}?subject=${subjectLine}&body=${bodyContent}`;

    setFormState({
      isSubmitted: true,
      hasCopied: false,
      mailtoUrl: mailto
    });

    // Automatically trigger mail client draft
    window.location.href = mailto;
  };

  const copyToClipboard = () => {
    const textToCopy = `To: ${portfolioData.contact.email}\nSubject: ${
      formData.subject || 'Portfolio Inquiry'
    }\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setFormState((prev) => ({ ...prev, hasCopied: true }));
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, hasCopied: false }));
      }, 3000);
    });
  };

  return (
    <section id="contact" className="contact-section" aria-label="Contact and Inquiries">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Contact Information */}
          <div className="contact-info-block">
            <div className="section-eyebrow">Get in Touch</div>
            <h2 className="contact-heading">{portfolioData.contact.heading}</h2>
            <p className="contact-subtext">{portfolioData.contact.subheading}</p>

            <div className="contact-methods-list">
              {/* Email Link */}
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="contact-method-card"
                title="Send an email to Neharika Shaw"
              >
                <div className="contact-method-icon" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-method-label">Direct Email</span>
                  <span className="contact-method-value">{portfolioData.contact.email}</span>
                </div>
              </a>

              {/* Phone Link */}
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="contact-method-card"
                title="Call Neharika Shaw"
              >
                <div className="contact-method-icon" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-method-label">Telephone</span>
                  <span className="contact-method-value">{portfolioData.contact.phoneDisplay}</span>
                </div>
              </a>

              {/* Location Badge */}
              <div className="contact-method-card">
                <div className="contact-method-icon" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-method-label">Location</span>
                  <span className="contact-method-value">{portfolioData.contact.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-card">
            <h3 className="section-title" style={{ fontSize: '1.45rem', marginBottom: '8px' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '24px', color: 'var(--color-charcoal-muted)' }}>
              Fill in your details below to generate a direct email message to Neharika.
            </p>

            {formState.isSubmitted && (
              <div className="form-status-notice success" role="alert">
                <div>
                  <strong>Email Draft Created:</strong> Your default mail application has been prompted.
                  If it didn't open automatically, you can send directly or copy your message below:
                  <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a
                      href={formState.mailtoUrl}
                      className="btn btn-primary"
                      style={{ padding: '8px 16px', fontSize: '0.78rem' }}
                    >
                      <ExternalLink size={14} />
                      <span>Open Mail Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="btn btn-secondary"
                      style={{ padding: '8px 16px', fontSize: '0.78rem' }}
                    >
                      {formState.hasCopied ? <Check size={14} /> : <Copy size={14} />}
                      <span>{formState.hasCopied ? 'Copied to Clipboard' : 'Copy Message Text'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Full Name <span style={{ color: 'var(--color-gold)' }}>*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Rajesh Boobna"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address <span style={{ color: 'var(--color-gold)' }}>*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g. rajesh@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject / Organization
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Accounting Position / Professional Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span style={{ color: 'var(--color-gold)' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Share details regarding the role, articleship opening, or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Send size={16} />
                <span>Prepare &amp; Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
