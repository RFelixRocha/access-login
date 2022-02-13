import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    const recoveredUser = localStorage.getItem('u')

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }

    setLoading(false)

  }, [] )
  const login = (email, password) => {

    const loggedUser = { 
      id: '12345',
      email
    }

    localStorage.setItem('u', JSON.stringify(loggedUser))

    if (password === '12345') {
      setUser(loggedUser)
      navigate('/')
    }

  }

  const logout = () => {
    localStorage.removeItem('u')
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={ { authenticated: !!user, user, loading, login, logout } }>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }