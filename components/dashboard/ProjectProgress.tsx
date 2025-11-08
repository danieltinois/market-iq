export default function ProjectProgress() {
  const projects = [
    { label: 'Migração de Servidor', pct: 20, color: 'danger' },
    { label: 'Rastreamento de Vendas', pct: 40, color: 'warning' },
    { label: 'Banco de Clientes', pct: 60, color: 'primary' },
    { label: 'Detalhes de Pagamentos', pct: 80, color: 'info' },
    { label: 'Configuração de Conta', pct: 100, color: 'success' },
  ];

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="text-primary m-0 fw-bold">Projetos</h6>
        </div>

        <div className="card-body">
          {projects.map((p, i) => (
            <div key={i}>
              <h4 className="small fw-bold">
                {p.label}
                <span className="float-end">
                  {p.pct === 100 ? 'Concluído!' : `${p.pct}%`}
                </span>
              </h4>

              <div className="progress mb-4">
                <div
                  className={`progress-bar bg-${p.color}`}
                  style={{ width: `${p.pct}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
