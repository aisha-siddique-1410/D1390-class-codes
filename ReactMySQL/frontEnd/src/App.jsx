import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/studentable')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))


  }, [])
  return (
    <div style={{padding:"50px"}}>
      <h1> SQL COnnection</h1>
      <table>
        <thead>
          <th> ID</th>
           <th> FirstName</th>
            <th> Age</th>
             <th> Address</th>
        </thead>
        <tbody>
          {data.map((d, i)=> (
            <tr key={i}>
              <td>{d.Id}</td>
              <td>{d.FirstName}</td>
              <td>{d.Age}</td>
              <td>{d.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
