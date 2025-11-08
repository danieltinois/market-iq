export default function StatCard({
  title,
  value,
  icon,
  color,
  progress,
}: {
  title: string;
  value: string;
  icon: string;
  color: 'primary' | 'success' | 'info' | 'warning';
  progress?: number;
}) {
  return (
    <div className="col-md-6 col-xl-3 mb-4">
      <div className="stat-card">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <div className="title">{title}</div>

            {progress !== undefined ? (
              <>
                <div className="value">{value}</div>
                <div className="progress progress-sm mt-1">
                  <div
                    className={`progress-bar bg-${color}`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </>
            ) : (
              <div className="value">{value}</div>
            )}
          </div>

          <i className={`fas ${icon} text-${color}`}></i>
        </div>
      </div>
    </div>
  );
}
