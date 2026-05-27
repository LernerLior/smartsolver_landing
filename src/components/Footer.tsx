import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__logo">smart<span>Solver</span></span>
          <p className="footer__tagline">Smarter Problem Solving</p>
        </div>

        <nav className="footer__nav">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/sobre" className="footer__link">Sobre Nós</Link>
          <Link to="/contato" className="footer__link">Contato</Link>
        </nav>

        <p className="footer__copy">&copy; {new Date().getFullYear()} smartSolver. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
