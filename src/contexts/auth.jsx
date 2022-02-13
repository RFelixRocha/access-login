import React, { createContext, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const login = (email, password) => {
    setUser({id: '123',email})
    console.log('Login auth:: ',{email,password})
  }
  const logout = () => {
    console.log('Logout')
  }

  return (
    <AuthContext.Provider value={ { authenticated: !!user, user, login, logout } }>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }