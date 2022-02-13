import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Api } from '../services/api'
import { LoginRequest } from './authProvider'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    const recoveredUser = localStorage.getItem('u')
    const token = localStorage.getItem('token')

    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser))
      Api.defaults.headers.Authorization = `Bearer ${token}`
    }

    setLoading(false)

  }, [] )
  const login = async (email, password) => {

    const response = await LoginRequest(email,password)
    const token = response.token

    const loggedUser = { 
      id: '12345',
      email
    }

    console.log(response.token)

    localStorage.setItem('u', JSON.stringify(loggedUser))
    localStorage.setItem('token', token)

    Api.defaults.headers.Authorization = `Bearer ${token}`

    setUser(loggedUser)
    navigate('/')

  }

  const logout = () => {
    localStorage.removeItem('u')
    localStorage.removeItem('token')
    Api.defaults.headers.Authorization = null

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