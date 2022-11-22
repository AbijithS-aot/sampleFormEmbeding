import React, { useEffect, useRef } from 'react';
 
import { initKeycloak } from './userServices/userServices';
import {Link} from "react-router-dom"
function App({children}) {
  const logout = useRef(null)
  useEffect(() => {
    initKeycloak((keycloak) => {
      logout.current = keycloak.logout
    })
  }, [])
  return (
    <>

      <nav className="navbar navbar-light bg-light d-flex justify-content-between align-items-center">
      <Link to="/" >
      <img src="https://www.nicepng.com/png/detail/794-7946773_e-learning-logo-png.png" width="150" className="d-inline-block align-top" alt="" />
        </Link> 
        <button className='btn btn-danger' onClick={() => { logout.current() }}>Logout</button>
      </nav>
      {children}

    </>
  );
}

export default App;


