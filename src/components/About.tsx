import React from "react";
import "../styles/About.css";
import salesImage from "../assets/sales.jpeg";
import resultsImage from "../assets/results.jpg";
import analysisImage from "../assets/analysis.jpg";
import personalizationImage from "../assets/personalization.jpg";
import listenImage from "../assets/listen.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="section-title">Chi Siamo</h2>
          <p className="section-subtitle">Partner strategico per la crescita della tua azienda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="about-content">
            <div className="content-card p-8 rounded-2xl shadow-xl">
              <p className="text-lg leading-relaxed mb-6">
                Siamo un'azienda specializzata nello sviluppo e nella crescita delle imprese, nata con l'obiettivo di affiancare realtà di ogni dimensione nel
                loro percorso di evoluzione. Crediamo che ogni azienda abbia un potenziale unico e lavoriamo ogni giorno per valorizzarlo attraverso strategie
                mirate, innovative e orientate ai risultati.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Il nostro approccio si basa su tre elementi fondamentali: ascolto, analisi e personalizzazione. Studiamo a fondo le esigenze di ogni cliente per
                proporre soluzioni concrete che migliorino le performance, ottimizzino i processi e rafforzino la presenza sul mercato.
              </p>

              <p className="text-lg leading-relaxed">
                Grazie a un team di professionisti esperti e a una visione orientata al futuro, aiutiamo le imprese a migliorare la propria organizzazione,
                aumentare la competitività e raggiungere obiettivi ambiziosi in modo sostenibile.
              </p>
            </div>
          </div>

          <div className="image-showcase">
            <div className="relative">
              <div className="main-image-container rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img
                  src={salesImage}
                  alt="Risultati di crescita"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Risultati</h3>
                  <p className="text-lg opacity-90">Trasformiamo le sfide in opportunità</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mission-section mb-16">
          <div className="mission-card p-12 rounded-3xl shadow-2xl text-center">
            <div className="mission-icon mb-6">
              <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-white">La Nostra Missione</h3>
            <p className="text-xl leading-relaxed text-white max-w-3xl mx-auto font-medium">
              La nostra missione è semplice: far crescere le aziende, costruendo valore duraturo nel tempo.
            </p>
          </div>
        </div>

        <div className="approach-section">
          <h3 className="text-3xl font-bold text-center mb-16 text-gray-800">Il Nostro Approccio</h3>

          <div className="approach-timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-number">01</div>
                <div className="timeline-text">
                  <h4 className="text-2xl font-bold mb-3 text-gray-800">Ascolto</h4>
                  <p className="text-lg leading-relaxed text-gray-600 mb-4">
                    Comprendiamo a fondo le tue esigenze e ascoltiamo attentamente le sfide della tua azienda. Ogni collaborazione inizia con un dialogo
                    autentico per cogliere le opportunità di crescita.
                  </p>
                  <div className="timeline-image">
                    <div className="image-frame">
                      <img src={listenImage} alt="Ascolto" className="w-full h-56 object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-number">02</div>
                <div className="timeline-text">
                  <h4 className="text-2xl font-bold mb-3 text-gray-800">Analisi</h4>
                  <p className="text-lg leading-relaxed text-gray-600 mb-4">
                    Studiamo in dettaglio il tuo business, analizzando i processi, i mercati e la concorrenza. Utilizziamo dati avanzati per identificare punti
                    di forza e aree di miglioramento.
                  </p>
                  <div className="timeline-image">
                    <div className="image-frame">
                      <img src={analysisImage} alt="Analisi" className="w-full h-56 object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-number">03</div>
                <div className="timeline-text">
                  <h4 className="text-2xl font-bold mb-3 text-gray-800">Personalizzazione</h4>
                  <p className="text-lg leading-relaxed text-gray-600 mb-4">
                    Creiamo soluzioni su misura che si adattano perfettamente alle tue esigenze specifiche. Strategie personalizzate che valorizzino l'unicità
                    della tua azienda.
                  </p>
                  <div className="timeline-image">
                    <div className="image-frame">
                      <img src={personalizationImage} alt="Personalizzazione" className="w-full h-56 object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-number">04</div>
                <div className="timeline-text">
                  <h4 className="text-2xl font-bold mb-3 text-gray-800">Risultati</h4>
                  <p className="text-lg leading-relaxed text-gray-600 mb-4">
                    Trasformiamo le sfide in opportunità di crescita concrete e misurabili. Il nostro successo si misura attraverso i tuoi risultati e la
                    crescita sostenibile.
                  </p>
                  <div className="timeline-image">
                    <div className="image-frame">
                      <img src={resultsImage} alt="Risultati" className="w-full h-56 object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
