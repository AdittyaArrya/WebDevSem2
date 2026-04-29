import { useState } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 32 },
  ]);

  const addStudent = (name, score) => {
    const newStudent = { id: Date.now(), name, score: parseInt(score) };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, score: parseInt(newScore) || 0 } : s
    ));
  };

  return (
    <div className="terminal-container">
      <Header />
      <AddStudentForm onAdd={addStudent} />
      <Summary students={students} />
      <StudentTable students={students} onUpdate={updateScore} />
      <p style={{textAlign: 'center', color: '#334155', fontSize: '0.7rem', marginTop: '20px'}}>
        ACADEMIC TERMINAL · SECURE SESSION
      </p>
    </div>
  );
}

export default App;
