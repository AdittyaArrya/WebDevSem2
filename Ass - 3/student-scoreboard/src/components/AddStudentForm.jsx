import { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !score) return;
    onAdd(name, score);
    setName(''); setScore('');
  };

  return (
    <form className="register-box" onSubmit={handleSubmit}>
      <div className="form-title">
        <span>● REGISTER STUDENT</span>
        <span>NEW ENTRY</span>
      </div>
      <div className="input-row">
        <input placeholder="Student name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Score" value={score} onChange={(e) => setScore(e.target.value)} />
        <button className="add-btn" type="submit">+ ADD</button>
      </div>
    </form>
  );
};
export default AddStudentForm;
