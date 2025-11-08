'use client';

import LandingFooter from '@/components/home/LandingFooter';
import LandingNavbar from '@/components/home/LandingNavbar';

export default function MonetizacaoPage() {
  return (
    <>
      <LandingNavbar />

      <div className="page">
        <div className="container">
          <section className="section">
            <div className="descricao">
              <h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                  <path d="M2 7h20" />
                </svg>
                Planos para Varejistas
              </h1>

              <p className="subtitle">
                O <strong>Plano Varejista</strong> foi criado para apoiar o
                ponto de venda em suas decisões do dia a dia. Com o plano{' '}
                <strong>gratuito</strong>, você já pode utilizar a plataforma e
                ter acesso ao <strong>clube de pontos.</strong>
              </p>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Módulos</th>
                    <th>
                      Essencial
                      <br />
                      <small>R$ 0,00</small>
                    </th>
                    <th>
                      Controle
                      <br />
                      <small>R$ 89,90</small>
                    </th>
                    <th>
                      Emissão
                      <br />
                      <small>R$ 399,90</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Contas a Receber e a Pagar</td>
                    <td>
                      <span className="xmark">✗</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Fluxo de Caixa</td>
                    <td>
                      <span className="xmark">✗</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Controle e Fechamento de Caixas</td>
                    <td>
                      <span className="xmark">✗</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Nota Fiscal Eletrônica</td>
                    <td>
                      <span className="xmark">✗</span>
                    </td>
                    <td>
                      <span className="xmark">✗</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Acesso ao sistema para contador</td>
                    <td>
                      <span className="xmark">✗</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Integração de Compras e Vendas</td>
                    <td>
                      <span className="xmark">✗</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Controle de estoque com shelf life</td>
                    <td>
                      <span className="xmark">✗</span>
                    </td>
                    <td>
                      <span className="xmark">✗</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Devolução</td>
                    <td>
                      <span className="xmark">✗</span>
                    </td>
                    <td>
                      <span className="xmark">✗</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Clube de Pontos</td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                    <td>
                      <span className="check">✓</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="subtitle" style={{ marginTop: '2rem' }}>
              A versão <strong>paga</strong> desbloqueia recursos avançados —
              relatórios completos, histórico de desempenho e métricas
              estratégicas para melhorar a gestão do seu negócio.
            </p>
          </section>

          {/* Seção 2 */}
          <section className="section">
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                <path d="M9 22v-4h6v4" />
              </svg>
              Planos para a Indústria
            </h1>

            <div className="descricao">
              <p className="subtitle">
                <strong>Para as indústrias</strong>, oferecemos dados
                estratégicos por distrito, revelando oportunidades reais de
                expansão e comportamento do mercado.
              </p>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Quantidade de Buscas</th>
                    <th>Valor Unitário (R$)</th>
                    <th>Desconto</th>
                    <th>Valor Total (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>10.000,00</td>
                    <td>-</td>
                    <td>10.000,00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>9.100,00</td>
                    <td>9%</td>
                    <td>18.200,00</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>8.281,00</td>
                    <td>17%</td>
                    <td>24.843,00</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>7.530,00</td>
                    <td>25%</td>
                    <td>30.120,00</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>6.847,00</td>
                    <td>32%</td>
                    <td>34.235,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="section">
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" x2="12" y1="20" y2="10" />
                <line x1="18" x2="18" y1="20" y2="4" />
                <line x1="6" x2="6" y1="20" y2="16" />
              </svg>
              Indicadores Estratégicos
            </h1>

            <div className="grid">
              <div className="info-box">
                <h3>Indicadores para Campanhas Publicitárias</h3>
                <ul>
                  <li>Market Share</li>
                  <li>Segmentação do público-alvo</li>
                  <li>Penetração de mercado</li>
                  <li>Frequência de compra</li>
                  <li>Ticket médio</li>
                  <li>Elasticidade de preço</li>
                </ul>
              </div>

              <div className="info-box">
                <h3>Indicadores de Capilaridade de Produtos</h3>
                <ul>
                  <li>Cobertura de municípios atendidos</li>
                  <li>Pontos de venda ativos (PDVs)</li>
                  <li>Volume de vendas por município</li>
                  <li>Distribuição numérica (DN)</li>
                  <li>Distribuição ponderada (DP)</li>
                  <li>Sortimento médio por PDV</li>
                  <li>Velocidade de giro</li>
                  <li>Quota no mix do varejista</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <LandingFooter />
    </>
  );
}
