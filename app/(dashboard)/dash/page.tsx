import DoughnutChartCard from '@/components/dashboard/DoughnutChartCard';
import LineChartCard from '@/components/dashboard/LineChartCard';
import ProjectProgress from '@/components/dashboard/ProjectProgress';
import StatCard from '@/components/dashboard/StatCard';
import TodoList from '@/components/dashboard/TodoList';

export default function DashboardPage() {
  return (
    <div id="wrapper" className="d-flex">
      <div className="d-flex flex-column flex-grow-1" id="content-wrapper">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-between align-items-center mb-4">
            <h3 className="text-dark mb-0">Painel</h3>
            <a
              className="btn btn-primary btn-sm d-none d-sm-inline-block"
              href="#"
            >
              <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Gerar
              Relatório
            </a>
          </div>

          {/* Stats */}
          <div className="row">
            <StatCard
              title="Ganhos (Mensal)"
              value="R$ 40.000"
              color="primary"
              icon="fa-calendar"
            />

            <StatCard
              title="Ganhos (Anual)"
              value="R$ 215.000"
              color="success"
              icon="fa-dollar-sign"
            />

            <StatCard
              title="Tarefas"
              value="50%"
              color="info"
              icon="fa-clipboard-list"
              progress={50}
            />

            <StatCard
              title="Solicitações Pendentes"
              value="18"
              color="warning"
              icon="fa-comments"
            />
          </div>

          {/* GRAPH + DOUGHNUT */}
          <div className="row">
            <LineChartCard />
            <DoughnutChartCard />
          </div>

          {/* PROJECT + TODO */}
          <div className="row">
            <ProjectProgress />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}
