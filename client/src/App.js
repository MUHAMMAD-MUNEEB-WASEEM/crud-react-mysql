
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState(0)

  const [employees, setEmployees] = useState([]);


  const addEmployee = () => {
    axios.post("http://localhost:3001/create", {
      name:name,
      age: age,
      country: country,
      position: position,
      salary: salary
    }).then((response)=>{
      console.log(response)
    })
  }


  const getEmployee = () => {
    axios.get("http://localhost:3001/")
      .then((response)=>{
        console.log(response)
        setEmployees(response)
      })
  }

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
      
          <button onClick={getEmployee}>Add Employee</button>
      

      </div>

      <hr style={{height: "1px", width: "100%"}}/>

    <div className='employees'>

      <button onClick={showEmployee}>Show Employees</button>

    </div>

    </div>
  );
}

export default App;
