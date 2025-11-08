'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="navbar align-items-start p-0 sidebar sidebar-dark accordion bg-gradient-primary navbar-dark">
      <div className="container-fluid d-flex flex-column p-0">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center m-0 sidebar-brand"
          href="/dash"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-handshake"></i>
          </div>
          <div className="mx-3 sidebar-brand-text">
            <span>Market IQ</span>
          </div>
        </Link>

        <ul className="navbar-nav text-light mt-3" id="accordionSidebar">
          <li className="nav-item">
            <Link
              className={clsx('nav-link', pathname === '/dash' && 'active')}
              href="/dash"
            >
              <i className="fas fa-tachometer-alt"></i>
              <span>Painel</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={clsx('nav-link', pathname === '/table' && 'active')}
              href="/table"
            >
              <i className="fas fa-table"></i>
              <span>Vendas Registradas</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
