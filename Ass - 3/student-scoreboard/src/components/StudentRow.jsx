const StudentRow = ({ student, onUpdate }) => {
  const isPassed = student.score >= 40;

  return (
    <tr>
      <td className={isPassed ? "pass-border" : "fail-border"}>{student.name}</td>
      <td className="score-display">{student.score}</td>
      <td>
        <span className={`status-badge ${isPassed ? 'status-pass' : 'status-fail'}`}>
          ● {isPassed ? "PASS" : "FAIL"}
        </span>
      </td>
      <td>
        <input 
          className="update-box"
          type="number" 
          value={student.score} 
          onChange={(e) => onUpdate(student.id, e.target.value)} 
        />
      </td>
    </tr>
  );
};
export default StudentRow;
