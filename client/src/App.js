
import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState(0)


  return (
    <div className="App">
        <div className='information'>
        
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)}/>

          <label>Age</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/>

          <label>Country</label>
          <input type="text" value={country} onChange={e => setCountry(e.target.value)}/>

          <label>Position</label>
          <input type="text" value={position} onChange={e => setPosition(e.target.value)}/>

          <label>Salary</label>
          <input type="number" value={salary} onChange={e => setSalary(e.target.value)}/>
      
          <button>Add Employee</button>
      
      </div>

    </div>
  );
}

export default App;
