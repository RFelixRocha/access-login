import { 
  BrowserRouter as Router,
Route,
Routes,
Navigate } from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={ <Login/> }></Route>
        <Route exact path='/' element={ <Home/> }></Route>
      </Routes>
    </Router>
  )
}
export { AppRoutes }