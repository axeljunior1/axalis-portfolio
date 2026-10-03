import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // Démo front-end uniquement, pas de backend branché.
    // Pour une mise en production, remplacer ce bloc par un vrai envoi
    // (endpoint d'e-mail transactionnel, service de formulaire, etc.).
    setSent(true);
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Contact</span>
          <h2>Un projet, un besoin métier ou du renfort technique ?</h2>
          <p>Décrivez-nous votre besoin, même si votre idée n'est pas encore complètement définie. Nous vous aiderons à préciser les prochaines étapes.</p>
          <span className="badge" style={{ marginTop: 16 }}>Étude et devis gratuits</span>
        </div>

        <div className="contact-grid">
          {sent ? (
            <div className="thanks">Merci — votre message est noté. Nous revenons vers vous sous 48h.</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="f-name">Nom</label>
                <input id="f-name" type="text" placeholder="Votre nom" required />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" type="email" placeholder="vous@entreprise.com" required />
              </div>
              <div className="field">
                <label htmlFor="f-msg">Votre besoin</label>
                <textarea id="f-msg" rows="4" placeholder="Décrivez votre projet, même brièvement…" required></textarea>
              </div>
              <button className="btn btn-primary" type="submit">Envoyer ma demande</button>
              <p className="form-note">Réponse sous 48h ouvrées. Aucune donnée n'est partagée avec des tiers.</p>
            </form>
          )}

          <div className="contact-direct">
            <div className="contact-row">
              <span className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.6 2.9z" />
                </svg>
              </span>
              <div><b>Axel — France</b><span>+33 6 87 79 84 30</span></div>
            </div>
            <div className="contact-row">
              <span className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.6 2.9z" />
                </svg>
              </span>
              <div><b>Alain — Italie</b><span>+39 351 943 0131</span></div>
            </div>
            <div className="contact-row">
              <span className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 6l-10 7L2 6" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </span>
              <div><b>Email</b><span>contact@axalis.com</span></div>
            </div>
            <div className="contact-row">
              <span className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1 4 4.1-1A10 10 0 1 0 12 2z" />
                  <path d="M8.5 9.5c.3 2.8 2.7 5.2 5.5 5.5.9.1 1.6-.5 1.4-1.3l-.2-.9a.9.9 0 0 0-.6-.6l-1.4-.4a.9.9 0 0 0-.9.2l-.4.4a6 6 0 0 1-2.7-2.7l.4-.4a.9.9 0 0 0 .2-.9l-.4-1.4a.9.9 0 0 0-.6-.6l-.9-.2c-.8-.2-1.4.5-1.4 1.3z" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <div><b>WhatsApp</b><span>Réponse rapide sur mobile</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
