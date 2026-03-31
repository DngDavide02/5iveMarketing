import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector(".section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="header-content grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div className="text-content lg:text-left text-center">
            <p className="header-subtitle text-sm lg:text-base">Benvenuto in 5ive Marketing</p>

            <h1 className="header-title">Trasforma la Tua Presenza Digitale con Soluzioni di Marketing Esperte</h1>

            <p className="header-description">
              Aiutiamo le aziende a crescere attraverso marketing digitale strategico, creazione di contenuti coinvolgenti e campagne data-driven che deliverano
              risultati misurabili e ROI eccezionali.
            </p>

            <div className="header-buttons">
              <button className="btn-hero btn-hero-primary">
                Inizia Ora
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button className="btn-hero btn-hero-secondary">
                Scopri di Più
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </button>
            </div>
          </div>

          <div className="header-image lg:justify-self-end">
            <img src="/src/assets/hands.jpeg" alt="Marketing team collaboration" loading="eager" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <button onClick={scrollToNext} aria-label="Scroll to next section" className="cursor-pointer hover:opacity-70 transition-opacity">
          <svg viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
