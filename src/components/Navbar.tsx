import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-text">smart<span className="navbar__logo-accent">Solver</span></span>
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/sobre" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={() => setMenuOpen(false)}>Sobre Nós</NavLink>
          <NavLink to="/contato" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={() => setMenuOpen(false)}>Contato</NavLink>
          <Link to="/contato" className="btn-primary navbar__cta" onClick={() => setMenuOpen(false)}>
            <span>Começar agora</span>
          </Link>
        </nav>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
