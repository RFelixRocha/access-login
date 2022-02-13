import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const login = (email, password) => {
    if(password === '12345') {
      setUser({id: '123',email})
      navigate('/')
    }
  }
  const logout = () => {
    console.log('Logout')
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={ { authenticated: !!user, user, login, logout } }>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }