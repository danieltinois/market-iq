'use client';

export default function MessagesDropdown() {
  return (
    <li className="nav-item dropdown no-arrow top-icon">
      <a className="nav-link top-action" data-bs-toggle="dropdown">
        <span className="badge badge-dot">7</span>
        <i className="fas fa-envelope"></i>
      </a>

      <div className="dropdown-menu dropdown-menu-end soft-dropdown animate-dropdown">
        <h6 className="dropdown-header">Mensagens</h6>

        <a className="dropdown-item d-flex align-items-center" href="#">
          <div className="position-relative me-3">
            <img
              className="rounded-circle"
              src="/img/avatars/avatar4.jpeg"
              width={40}
              height={40}
            />
            <span className="status-dot bg-success"></span>
          </div>

          <div>
            <p className="fw-semibold small mb-0">Oi! Preciso de ajuda</p>
            <span className="text-muted small">1h atrás</span>
          </div>
        </a>
      </div>
    </li>
  );
}
