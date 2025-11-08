'use client';

import { LuHandshake } from 'react-icons/lu';

export default function LandingFooter() {
  return (
    <footer className="mk-footer">
      <div className="container">
        <div className="mk-footer-row">
          <div className="mk-footer-left">
            <div className="mk-footer-brand">
              <span className="brand-name">MarketIQ</span>
              <LuHandshake className="brand-icon" />
            </div>

            <p className="mk-footer-desc">
              2025 Aplicação Coletora de Vendas — Market IQ®
            </p>
          </div>

          <ul className="mk-footer-nav">
            <li>
              <a href="#">Suporte</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
