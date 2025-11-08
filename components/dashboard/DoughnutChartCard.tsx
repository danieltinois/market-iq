'use client';

import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

export default function DoughnutChartCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Direto', 'Social', 'Referência'],
        datasets: [
          {
            data: [50, 30, 15],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            borderColor: ['#ffffff', '#ffffff', '#ffffff'],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="col-lg-5 col-xl-4">
      <div className="card shadow mb-4">
        <div className="card-header">
          <h6 className="text-primary m-0 fw-bold">Fontes de Receita</h6>
        </div>
        <div className="card-body">
          <div className="chart-area">
            <canvas ref={canvasRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
