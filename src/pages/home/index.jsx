import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

const Home = () => {
  const { logout, authenticated } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <>
    <h2>Home pages</h2>
    <p>{String(authenticated) }</p>
    <button onClick={  handleLogout }>Logout</button>
    </>
  )
}

export { Home }