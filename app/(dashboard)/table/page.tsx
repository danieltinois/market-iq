'use client';

import { useState } from 'react';

export default function TablePage() {
  const [page, setPage] = useState(1);

  const rows = [
    {
      produto: 'Leite Integral',
      marca: 'Italac',
      cod: '7891234567890',
      valor: '6,99',
      data: '10/11/2025',
      tipo: 'Pix',
      badge: 'success',
    },
    {
      produto: 'Chocolate 90g',
      marca: 'Garoto',
      cod: '4569871597531',
      valor: '4,50',
      data: '09/11/2025',
      tipo: 'Crédito',
      badge: 'primary',
    },
    {
      produto: 'Arroz 5kg',
      marca: 'Camil',
      cod: '9876543217894',
      valor: '22,90',
      data: '08/11/2025',
      tipo: 'Pix',
      badge: 'success',
    },
    {
      produto: 'Refrigerante 2L',
      marca: 'Coca-Cola',
      cod: '1237896548521',
      valor: '8,99',
      data: '08/11/2025',
      tipo: 'Débito',
      badge: 'secondary',
    },
  ];

  return (
    <div id="wrapper" className="d-flex">
      <div className="d-flex flex-column flex-grow-1" id="content-wrapper">
        <div className="container-fluid">
          <h3 className="text-dark mb-4">Vendas Registradas</h3>

          <div className="card shadow">
            <div className="card-header d-flex justify-content-between align-items-center py-3">
              <p className="text-primary m-0 fw-bold">Coleta de Itens</p>

              <div className="btn-group gap-2">
                <button className="btn btn-success">Novo Item</button>
                <button className="btn btn-warning">Importar CSV</button>
                <button className="btn btn-primary">Enviar Dados</button>
                <button className="btn btn-info">Exportar JSON</button>
                <button className="btn btn-danger">Exportar CSV</button>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive mt-2">
                <table className="table my-0">
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Marca</th>
                      <th>Cód. Barras</th>
                      <th>Valor (R$)</th>
                      <th>Data</th>
                      <th>Forma de Pagamento</th>
                    </tr>
                  </thead>

                  <tbody>
                    {rows.map((item, i) => (
                      <tr key={i}>
                        <td>{item.produto}</td>
                        <td>{item.marca}</td>
                        <td>{item.cod}</td>
                        <td className="text-success">{item.valor}</td>
                        <td>{item.data}</td>
                        <td>
                          <span className={`badge bg-${item.badge}`}>
                            {item.tipo}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* PAGINATOR */}
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <p className="dataTables_info">
                    Mostrando 1 a {rows.length} de 27
                  </p>
                </div>

                <div className="col-md-6 mt-4">
                  <nav className="d-lg-flex justify-content-lg-end">
                    <ul className="pagination">
                      <li
                        className={`page-item ${page === 1 ? 'disabled' : ''}`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setPage(page - 1)}
                        >
                          «
                        </button>
                      </li>

                      {[1, 2, 3].map(num => (
                        <li
                          key={num}
                          className={`page-item ${
                            page === num ? 'active' : ''
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => setPage(num)}
                          >
                            {num}
                          </button>
                        </li>
                      ))}

                      <li className="page-item">
                        <button
                          className="page-link"
                          onClick={() => setPage(page + 1)}
                        >
                          »
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
