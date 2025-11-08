'use client';

export default function ContactSettingsCard() {
  return (
    <div className="card shadow mb-3">
      <div className="card-header py-3">
        <p className="text-primary m-0 fw-bold">Informações de Contato</p>
      </div>

      <div className="card-body">
        <form>
          <div className="mb-3">
            <label className="form-label">
              <strong>Endereço</strong>
            </label>
            <input className="form-control" placeholder="Rua, Número" />
          </div>

          <div className="row">
            <div className="col mb-3">
              <label className="form-label">
                <strong>Cidade</strong>
              </label>
              <input className="form-control" placeholder="São Paulo" />
            </div>

            <div className="col mb-3">
              <label className="form-label">
                <strong>País</strong>
              </label>
              <input className="form-control" placeholder="Brasil" />
            </div>
          </div>

          <button className="btn btn-primary btn-sm">Salvar</button>
        </form>
      </div>
    </div>
  );
}
