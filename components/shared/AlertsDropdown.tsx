'use client';

export default function AlertsDropdown() {
  return (
    <li className="nav-item dropdown no-arrow top-icon">
      <a
        className="nav-link top-action"
        data-bs-toggle="dropdown"
        role="button"
      >
        <span className="badge badge-dot">3</span>
        <i className="fas fa-bell"></i>
      </a>

      <div className="dropdown-menu dropdown-menu-end soft-dropdown animate-dropdown">
        <h6 className="dropdown-header">Notificações</h6>

        <a className="dropdown-item d-flex align-items-center" href="#">
          <div className="circle-icon bg-primary-subtle text-primary me-3">
            <i className="fas fa-file-alt"></i>
          </div>

          <div>
            <p className="fw-semibold small mb-0">
              Novo relatório mensal disponível
            </p>
            <span className="text-muted small">Hoje</span>
          </div>
        </a>
      </div>
    </li>
  );
}
