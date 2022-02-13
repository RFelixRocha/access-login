import React, { useContext } from 'react'
import { 
  BrowserRouter as Router,
Route,
Routes,
Navigate } from 'react-router-dom'
import { Login } from '../pages/login'
import { Home } from '../pages/home'
import { AuthProvider, AuthContext } from '../contexts/auth'


const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)

    if (loading) {
      console.log('Loading')
      return <div className='loading'> Carregando Informações...</div>
    }

    if (!authenticated) {
      return <Navigate to='/login'></Navigate>
    }

    return children
  }
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path='/login' element={ <Login/> }></Route>
          <Route exact path='/' element={ <Private> <Home/> </Private>}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}
export { AppRoutes }