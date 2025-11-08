'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../../styles/home.css';

export default function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`mk-navbar ${
        isScrolled ? 'scrolled' : ''
      } navbar navbar-expand-lg fixed-top`}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/">
          MarketIQ<span className="brand-dot"></span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMain"
          aria-controls="navMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div id="navMain" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {['Página Inicial', 'Nossa História', 'Indústria'].map(item => (
              <li className="nav-item" key={item}>
                <Link className="nav-link mk-link" href="/">
                  {item}
                </Link>
              </li>
            ))}

            {/* Dropdown */}
            <li className="nav-item dropdown mk-dropdown">
              <a className="nav-link mk-link dropdown-toggle" role="button">
                <span>Serviços</span>
                <span className="mk-chevron"></span>
              </a>

              <ul className="dropdown-menu mk-dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/">
                    Consultoria
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    Treinamentos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    Mentorias
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    Contato
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="d-none d-lg-flex ms-3 gap-2">
            <Link className="btn btn-outline-dark" href="/login">
              Login
            </Link>
            <Link className="btn btn-dark" href="/register">
              Registrar
            </Link>
            <Link className="btn btn-outline-primary" href="/pdv">
              PDV
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
