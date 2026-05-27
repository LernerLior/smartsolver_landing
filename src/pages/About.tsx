import './About.css'

const team = [
  { name: 'Lior Lerner', role: 'Co-fundador', emoji: '👨‍💼' },
  { name: 'Vinícius Fioravante', role: 'Co-fundador', emoji: '👨‍💻' },
]

const values = [
  { icon: '🎯', title: 'Foco no cliente', desc: 'Cada decisão começa com o impacto que terá nos nossos clientes e nos usuários finais que eles atendem.' },
  { icon: '⚡', title: 'Agilidade', desc: 'Acreditamos na entrega rápida e iterativa, aprendendo continuamente para melhorar nosso produto.' },
  { icon: '🔒', title: 'Transparência', desc: 'Dados claros, comunicação aberta e honestidade em todas as nossas relações.' },
  { icon: '🌱', title: 'Crescimento', desc: 'Investimos no desenvolvimento da nossa equipe e dos negócios dos nossos clientes.' },
]

export default function About() {
  return (
    <div className="about">
      {/* Page header */}
      <section className="about-hero">
        <div className="about-hero__orb" />
        <div className="container about-hero__inner">
          <p className="section-label fade-up fade-up-1">Quem somos</p>
          <h1 className="about-hero__title fade-up fade-up-2">
            Nascemos para resolver<br />
            <span className="about-hero__accent">o caos digital</span>
          </h1>
          <div className="glow-line" style={{ margin: '0 auto 0 0' }} />
          <p className="about-hero__desc fade-up fade-up-3">
            O smartSolver surgiu da frustração de ver empresas perdendo clientes por não conseguir
            gerenciar reclamações espalhadas por dezenas de canais diferentes. Nossa missão é simples:
            centralizar, organizar e resolver.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="container mission-grid">
          <div className="mission-card mission-card--highlight">
            <div className="mission-card__icon">🎯</div>
            <h3 className="mission-card__title">Nossa Missão</h3>
            <p className="mission-card__text">
              Transformar a gestão de reclamações em uma vantagem competitiva para empresas de todos os tamanhos,
              através de tecnologia inteligente e experiência de uso excepcional.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-card__icon">🔭</div>
            <h3 className="mission-card__title">Nossa Visão</h3>
            <p className="mission-card__text">
              Ser a plataforma de referência em gestão inteligente de feedback no Brasil e América Latina,
              conectando empresas e consumidores de forma mais eficiente e humana.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <p className="section-label">Nossos pilares</p>
          <h2 className="values-title">O que nos guia</h2>
          <div className="glow-line" />
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-item">
                <span className="value-item__icon">{v.icon}</span>
                <div>
                  <h4 className="value-item__title">{v.title}</h4>
                  <p className="value-item__desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <p className="section-label">Pessoas</p>
          <h2 className="team-title">Conheça o time</h2>
          <div className="glow-line" />
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={i} className="team-card">
                <div className="team-card__avatar">{m.emoji}</div>
                <h4 className="team-card__name">{m.name}</h4>
                <p className="team-card__role">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
