'use client';

import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

export default function LineChartCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
        datasets: [
          {
            label: 'Ganhos',
            fill: true,
            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000],
            backgroundColor: 'rgba(78, 115, 223, 0.05)',
            borderColor: 'rgba(78, 115, 223, 1)',
            tension: 0.4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="col-lg-7 col-xl-8">
      <div className="card shadow mb-4">
        <div className="card-header">
          <h6 className="text-primary m-0 fw-bold">Resumo de Ganhos</h6>
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
