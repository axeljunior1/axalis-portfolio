import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-arc" aria-hidden="true"></div>
      <div className="wrap hero-grid">
        <div>
          <span className="badge">Cameroun · Europe</span>
          <h1>Vos idées.<br /><span className="accent">Nos solutions.</span></h1>
          <p className="lead">AXALIS accompagne les entreprises et les porteurs de projets dans la création d'applications, l'automatisation de leurs activités et le renforcement de leurs équipes techniques.</p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/#contact">Parlons de votre projet</Link>
            <Link className="btn btn-ghost" to="/#solutions">Découvrir nos solutions</Link>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="mock">
            <div className="mock-bar"><span className="mock-dot"></span><span className="mock-dot"></span><span className="mock-dot"></span></div>
            <div className="mock-body">
              <div className="mock-side"><i></i><i></i><i></i><i></i><i></i></div>
              <div className="mock-main">
                <div className="mock-stat-row">
                  <div className="mock-stat"><b>128</b><span>COMMANDES</span></div>
                  <div className="mock-stat"><b>94%</b><span>SYNC OK</span></div>
                  <div className="mock-stat"><b>12</b><span>EN LOCAL</span></div>
                </div>
                <div className="mock-chart">
                  <i style={{ height: '40%' }}></i><i style={{ height: '65%' }}></i><i style={{ height: '35%' }}></i>
                  <i style={{ height: '80%' }}></i><i style={{ height: '55%' }}></i><i style={{ height: '70%' }}></i><i style={{ height: '45%' }}></i>
                </div>
                <div className="mock-rows"><i></i><i></i><i></i></div>
              </div>
            </div>
            <div className="mock-phone">
              <div className="ph-screen"><i></i><i></i><i></i><i></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
