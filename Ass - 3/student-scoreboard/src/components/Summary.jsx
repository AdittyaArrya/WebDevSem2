const Summary = ({ students }) => {
  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const avg = total > 0 ? Math.round(students.reduce((acc, s) => acc + s.score, 0) / total) : 0;

  return (
    <div className="stats-grid">
      <div className="stat-card"><h3>Total</h3><p>{total}</p></div>
      <div className="stat-card"><h3>Passed</h3><p>{passed}</p></div>
      <div className="stat-card"><h3>Avg Score</h3><p>{avg}</p></div>
    </div>
  );
};
export default Summary;
