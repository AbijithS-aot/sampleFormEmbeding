import React, { useEffect, useRef } from 'react';
import './App.css';
import Form from './components/Form';
import { initKeycloak } from './userServices/userServices';

function App() {
  const logout = useRef(null)
  useEffect(()=>{
    initKeycloak((keycloak)=>{
      logout.current = keycloak.logout
    })
  },[])
  return (
    <div className="App container">
      <button className='btn btn-danger' style={{float:"right",marginBottom:"2rem"}} onClick={()=>{logout.current()}}>Logout</button>
      <div className=''>
      <Form />
      </div>
    </div>
  );
}

export default App;


