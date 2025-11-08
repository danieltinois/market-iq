export default function TodoList() {
  const todos = [
    { title: 'Reunião de Almoço', time: '10:30' },
    { title: 'Apresentação Comercial', time: '11:30' },
    { title: 'Call com Cliente', time: '12:30' },
  ];

  return (
    <div className="col">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="text-primary m-0 fw-bold">Lista de Tarefas</h6>
        </div>

        <ul className="list-group list-group-flush">
          {todos.map((t, i) => (
            <li key={i} className="list-group-item">
              <div className="row g-0 align-items-center">
                <div className="col me-2">
                  <h6 className="mb-0">
                    <strong>{t.title}</strong>
                  </h6>
                  <span className="text-xs">{t.time}</span>
                </div>
                <div className="col-auto">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
