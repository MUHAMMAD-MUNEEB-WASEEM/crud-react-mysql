
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

  const [newSalary, setNewSalary] = useState(0)


  const addEmployee = () => {
    axios.post("http://localhost:3001/create", {
      name:name,
      age: age,
      country: country,
      position: position,
      salary: salary
    }).then((response)=>{
      setEmployees([...employees, 
        {
          name: name,
          age: age,
          country: country,
          position:  position,
          salary: salary
        }
      
      ])
    })
  }


  const getEmployee = () => {
    axios.get("http://localhost:3001/employees")
      .then((response)=>{
        console.log(response)
        setEmployees(response.data)
      })
  }


  const updateEmployeeSalary = (id) => {
    axios.put("http://localhost:3001/update", { salary: newSalary, id: id }).then(
      (response) => {
        setEmployees(
          employees.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  name: val.name,
                  country: val.country,
                  age: val.age,
                  position: val.position,
                  salary: newSalary,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then((response)=>{
        setEmployees(employees.filter((val)=>{
          return val.id != id
        }))
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
      
          <button onClick={addEmployee}>Add Employee</button>
      

      </div>

      <hr style={{height: "1px", width: "100%"}}/>

    <div className='employees'>

      <button onClick={getEmployee}>Show Employees</button>

      {employees.map((employee, id)=>(

        <div key={id} className="employee">
         
          <div>
            <h2>Name: <span>{employee.name}</span></h2>
            <h2>Age: <span>{employee.age}</span></h2>
            <h2>Country: <span>{employee.country}</span></h2>
            <h2>Position: <span>{employee.position}</span></h2>
            <h2>Salary: <span>{employee.salary}</span></h2>
          </div>
         
          <div className='update_delete'>
            <input 
            type="text" 
            placeholder='2000...'
            value={newSalary}
            onChange= {e=>setNewSalary(e.target.value)}
            style={{display: 'flex', flexDirection:"column"}}
            />
            

            <div className='update_delete_button'>
              <button onClick={()=>updateEmployeeSalary(id)}>Update</button>

              <button onClick={()=>deleteEmployee(id)}>Delete</button>

            </div>
            
            
          
          </div>

        </div>
      ))}

    </div>

    </div>
  );
}

export default App;
