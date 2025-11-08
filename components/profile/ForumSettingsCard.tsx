'use client';

export default function ForumSettingsCard() {
  return (
    <div className="card shadow mb-5">
      <div className="card-header py-3">
        <p className="text-primary m-0 fw-bold">Configurações do Fórum</p>
      </div>

      <div className="card-body">
        <form>
          <div className="mb-3">
            <label className="form-label">
              <strong>Assinatura</strong>
            </label>
            <textarea className="form-control" rows={4} />
          </div>

          <div className="form-check form-switch mb-3">
            <input type="checkbox" className="form-check-input" id="notify" />
            <label className="form-check-label" htmlFor="notify">
              <strong>Notifique-me sobre novas respostas</strong>
            </label>
          </div>

          <button className="btn btn-primary btn-sm">Salvar</button>
        </form>
      </div>
    </div>
  );
}
