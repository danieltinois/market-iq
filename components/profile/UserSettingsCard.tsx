'use client';

export default function UserSettingsCard() {
  return (
    <div className="card shadow mb-3">
      <div className="card-header py-3">
        <p className="text-primary m-0 fw-bold">Configurações do Usuário</p>
      </div>

      <div className="card-body">
        <form>
          <div className="row">
            <div className="col mb-3">
              <label className="form-label">
                <strong>Username</strong>
              </label>
              <input className="form-control" placeholder="user.name" />
            </div>

            <div className="col mb-3">
              <label className="form-label">
                <strong>Email</strong>
              </label>
              <input className="form-control" placeholder="user@mail.com" />
            </div>
          </div>

          <div className="row">
            <div className="col mb-3">
              <label className="form-label">
                <strong>Nome</strong>
              </label>
              <input className="form-control" placeholder="Daniel" />
            </div>

            <div className="col mb-3">
              <label className="form-label">
                <strong>Sobrenome</strong>
              </label>
              <input className="form-control" placeholder="Tinois" />
            </div>
          </div>

          <button className="btn btn-primary btn-sm" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
