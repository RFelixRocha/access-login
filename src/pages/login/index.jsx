import React, { useState } from 'react'
import './styles.css'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Logim', { email, password })
  }

  return  (
    <div id="login">
      <h4>Login do sistema</h4>
      <form className="form" onSubmit={ handleSubmit }>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" 
          value={ email }
          onChange={ (e)  => setEmail(e.target.value)} 
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" 
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          />
        </div>

        <div className="actions">
          <button type="submit">Login</button>
        </div>

      </form>
    </div>
  )
}

export default Login