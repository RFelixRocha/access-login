import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import { getUsers } from '../../contexts/authProvider'

const Home = () => {
  const { logout } = useContext(AuthContext)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ( async () => {
      const response = await getUsers()
      setUsers(response.data)
      setLoading(false)
    })()
  },[])

  const handleLogout = () => {
    logout()
  }

  if (loading) {
    return <div className='loading'> Carregando Informações...</div>
  }

  return (
    <>
    <h2>Home pages</h2>
    <button onClick={  handleLogout }>Logout</button>
    <ul>
      {
        users.map( (user) => (
          <li key={ user.id }>
            { user.id } - { user.first_name } - { user.email }
          </li>
        ))
      }
    </ul>
    </>
  )
}

export { Home }