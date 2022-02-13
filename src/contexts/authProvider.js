import { Api } from '../services/api'

const LoginRequest = async (email, password) => {

  try {

    const request = await Api.post('login', {email, password})

    return request.data

  } catch(error) {
    return null
  }

}

const getUsers = async () => {

  try {

    const users = await Api.get('users?page=2')
    
    return users.data

  } catch(error) {
    return null
  }

}

export { LoginRequest, getUsers}