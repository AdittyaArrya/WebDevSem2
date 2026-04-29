import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdate }) => (
  <div className="table-container">
    <div className="form-title" style={{marginBottom: '5px'}}>
       <span>STUDENT RECORDS</span>
       <span>{students.length} entries</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>NAME</th><th>SCORE</th><th>STATUS</th><th>UPDATE</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <StudentRow key={s.id} student={s} onUpdate={onUpdate} />
        ))}
      </tbody>
    </table>
  </div>
);
export default StudentTable;
