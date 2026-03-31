import React from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contattaci</h2>

        <div className="contact-grid">
          <div className="contact-page-info">
            <div className="contact-page-header">
              <h3 className="contact-page-title">Parliamo del tuo progetto</h3>
              <p className="contact-page-subtitle">
                Siamo pronti a trasformare la tua visione in realtà. Contattaci per discutere come possiamo aiutare la tua attività a crescere.
              </p>
            </div>

            <div className="contact-page-items">
              <div className="contact-page-item">
                <svg className="contact-page-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div className="contact-page-details">
                  <label>Email</label>
                  <a href="mailto:info@5ivemarketing.com" className="contact-page-link">
                    info@5ivemarketing.com
                  </a>
                </div>
              </div>

              <div className="contact-page-item">
                <svg className="contact-page-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="contact-page-details">
                  <label>Telefono</label>
                  <a href="tel:+391234567890" className="contact-page-link">
                    +39 123 456 7890
                  </a>
                </div>
              </div>

              <div className="contact-page-item">
                <svg className="contact-page-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="contact-page-details">
                  <label>Sede</label>
                  <span className="contact-page-text">Bracciano, Italia</span>
                </div>
              </div>
            </div>

            <div className="contact-page-social-section">
              <h4 className="contact-page-social-title">Seguici sui social</h4>
              <div className="contact-page-social-icons">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-page-social-icon" aria-label="Seguici su LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-page-social-icon"
                  aria-label="Seguici su Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact-page-cta-section">
              <button className="btn btn-primary">Inizia una conversazione</button>
              <p className="contact-page-cta-note">Rispondiamo entro 24 ore</p>
            </div>
          </div>

          <div className="contact-visual">
            <div className="visual-content">
              <div className="visual-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22,4 12,14.01 9,11.01" />
                  </svg>
                </div>
                <h4>Pronto a iniziare?</h4>
                <p className="visual-card-text-dark">Unisciti alle aziende che hanno già trasformato la loro presenza digitale con noi.</p>
              </div>

              <div className="decoration-elements">
                <div className="decoration-circle decoration-1"></div>
                <div className="decoration-circle decoration-2"></div>
                <div className="decoration-circle decoration-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
