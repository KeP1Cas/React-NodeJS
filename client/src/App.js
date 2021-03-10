import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import { useRouts } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import NavBar from './Components/NavBar';
import Loader from './Components/Loader'


function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRouts(isAuthenticated)

  if(!ready){
    return <Loader/>
  }
  
  return (

    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
      {isAuthenticated ? <NavBar/> : isAuthenticated}
        <div className="container">
          {routes}
          
        
        </div>
      </Router>
    </AuthContext.Provider>
    
  )
}

export default App;
