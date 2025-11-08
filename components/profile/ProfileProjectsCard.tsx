export default function ProfileProjectsCard() {
  const projects = [
    { title: 'Migração de Servidor', pct: 20, color: 'danger' },
    { title: 'Rastreamento de Vendas', pct: 40, color: 'warning' },
    { title: 'Banco de Clientes', pct: 60, color: 'primary' },
    { title: 'Detalhes de Pagamentos', pct: 80, color: 'info' },
    { title: 'Configuração de Conta', pct: 100, color: 'success' },
  ];

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="text-primary m-0 fw-bold">Projetos</h6>
      </div>

      <div className="card-body">
        {projects.map((p, i) => (
          <div key={i} className="mb-3">
            <h6 className="small fw-bold">
              {p.title}
              <span className="float-end">{p.pct}%</span>
            </h6>

            <div className="progress progress-sm">
              <div
                className={`progress-bar bg-${p.color}`}
                style={{ width: `${p.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
