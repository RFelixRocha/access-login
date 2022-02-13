import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://reqres.in/api/'
})

export { Api }