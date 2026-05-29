import { Link } from 'react-router-dom'
import './Home.css'

const features = [
  {
    icon: '🌐',
    title: 'Centralização de Reclamações',
    desc: 'Reunimos reclamações espalhadas pelo Reclame Aqui, redes sociais, e-mail e outros canais em um único painel organizado.',
  },
  {
    icon: '🧠',
    title: 'Análise com Inteligência Artificial',
    desc: 'Nossa IA lê, classifica e interpreta cada reclamação automaticamente, identificando o problema central e o melhor caminho de resposta.',
  },
  {
    icon: '⚡',
    title: 'Respostas Rápidas e Eficientes',
    desc: 'Com base na análise da IA, sua equipe recebe sugestões de resposta prontas — reduzindo drasticamente o tempo de atendimento.',
  },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />

        <div className="container hero__inner">
          <div className="hero__content">
            <p className="section-label fade-up fade-up-1">Smarter Problem Solving</p>
            <h1 className="hero__title fade-up fade-up-2">
              smart<span className="hero__title-accent">Solver</span>
            </h1>
            <p className="hero__desc fade-up fade-up-3">
              Uma plataforma inteligente que centraliza todas as reclamações da sua empresa 
              espalhadas pela internet e utiliza IA para analisar e gerar respostas 
              rápidas e eficientes.
            </p>
            <div className="hero__actions fade-up fade-up-4">
              <Link to="/contato" className="btn-primary">
                <span>Entrar em contato</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/sobre" className="btn-outline">Saiba mais</Link>
            </div>
          </div>

          <div className="hero__visual fade-up fade-up-3">
            <div className="hero__image-wrap">
              <div className="hero__image-glow" />
              <div className="hero__image-placeholder">
                <svg className="hero__lock-icon" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="52" width="80" height="58" rx="10" fill="rgba(0,200,255,0.1)" stroke="var(--accent-cyan)" strokeWidth="2.5"/>
                  <path d="M38 52V36C38 24.95 47.4 16 59 16H61C72.6 16 82 24.95 82 36V52" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="60" cy="78" r="10" fill="var(--accent-cyan)" opacity="0.8"/>
                  <rect x="56" y="85" width="8" height="12" rx="4" fill="var(--accent-cyan)" opacity="0.8"/>
                  <line x1="10" y1="70" x2="20" y2="70" stroke="var(--accent-cyan)" strokeWidth="1.5" opacity="0.4"/>
                  <line x1="100" y1="70" x2="110" y2="70" stroke="var(--accent-cyan)" strokeWidth="1.5" opacity="0.4"/>
                  <line x1="10" y1="90" x2="20" y2="90" stroke="var(--accent-cyan)" strokeWidth="1.5" opacity="0.4"/>
                  <line x1="100" y1="90" x2="110" y2="90" stroke="var(--accent-cyan)" strokeWidth="1.5" opacity="0.4"/>
                  <circle cx="10" cy="70" r="3" fill="var(--accent-cyan)" opacity="0.4"/>
                  <circle cx="110" cy="90" r="3" fill="var(--accent-cyan)" opacity="0.4"/>
                </svg>
                <div className="hero__circuit-grid" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint">
          <span />
        </div>
      </section>

      {/* How it works */}
      <section className="howit-section">
        <div className="container">
          <div className="features-header">
            <p className="section-label">Como funciona</p>
            <h2 className="features-title">Da reclamação à resolução,<br/>em um único lugar</h2>
            <div className="glow-line" />
          </div>
          <div className="howit-steps">
            <div className="howit-step">
              <div className="howit-step__num">01</div>
              <div>
                <h4 className="howit-step__title">Coleta automática</h4>
                <p className="howit-step__desc">O smartSolver monitora e coleta reclamações de múltiplas fontes da internet de forma contínua e automática.</p>
              </div>
            </div>
            <div className="howit-step__arrow">→</div>
            <div className="howit-step">
              <div className="howit-step__num">02</div>
              <div>
                <h4 className="howit-step__title">Análise com IA</h4>
                <p className="howit-step__desc">Nossa inteligência artificial lê cada reclamação, classifica o problema e avalia a urgência e o contexto.</p>
              </div>
            </div>
            <div className="howit-step__arrow">→</div>
            <div className="howit-step">
              <div className="howit-step__num">03</div>
              <div>
                <h4 className="howit-step__title">Resposta eficiente</h4>
                <p className="howit-step__desc">Sua equipe recebe a reclamação já organizada com uma sugestão de resposta pronta para revisar e enviar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <p className="section-label">Recursos</p>
            <h2 className="features-title">Tudo que sua equipe<br/>precisa em um lugar só</h2>
            <div className="glow-line" />
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-card__icon">{f.icon}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
                <div className="feature-card__line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner__glow" />
        <div className="container cta-banner__inner">
          <div className="cta-banner__text">
            <h2 className="cta-banner__title">Pronto para centralizar e resolver<br/>reclamações com inteligência?</h2>
            <p className="cta-banner__desc">
              Entre em contato e descubra como o smartSolver pode transformar
              o atendimento da sua empresa.
            </p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contato" className="btn-primary">
              <span>Fale com a gente</span>
            </Link>
            <Link to="/sobre" className="btn-outline">Conheça a empresa</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
