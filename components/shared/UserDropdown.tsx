'use client';

import Image from 'next/image';

export default function UserDropdown() {
  return (
    <li className="nav-item dropdown no-arrow top-icon">
      <a className="nav-link top-action" data-bs-toggle="dropdown">
        <span className="d-none d-lg-inline text-gray-700 small me-2">
          Valerie Luna
        </span>

        <Image
          className="rounded-circle top-avatar"
          src="/img/avatars/avatar1.jpeg"
          width={40}
          height={40}
          alt="Avatar"
        />
      </a>

      <div className="dropdown-menu dropdown-menu-end soft-dropdown animate-dropdown">
        <a className="dropdown-item" href="/profile">
          <i className="fas fa-user me-2"></i> Perfil
        </a>
        <a className="dropdown-item" href="#">
          <i className="fas fa-cogs me-2"></i> Configurações
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">
          <i className="fas fa-sign-out-alt me-2"></i> Sair
        </a>
      </div>
    </li>
  );
}
