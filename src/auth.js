import axios from 'axios'

const getToken = () => {
  return localStorage.getItem('userToken')
}

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 3000,
  headers: {'X-Custom-Header': 'foobar'}
});

instance.defaults.headers.common['Authorization'] = 'Bearer ' + getToken()

export default {
  register (form) {
    return new Promise((resolve, reject) => {
      instance.post('/register', {
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.password_confirmation,
      })
      .then(response => {
        // eslint-disable-next-line no-console
        // console.log(response)
        resolve(response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        // console.log('hi error', error, 'response: ', error.response)
        reject(error)
      })
    })
  },

  isLoggedIn () {
    // eslint-disable-next-line no-console
    console.log('I am isLoggedIn')

    return getToken() ? true : false
  },

  // makeLogin() {

  // },

  login (form) {
    return new Promise((resolve, reject) => {
      instance.post('/login', {
        email: form.email,
        password: form.password,
      })
      .then(response => {
        // eslint-disable-next-line no-console
        // console.log(response)
        resolve(response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        // console.log('hi error', error, 'response: ', error.response)
        reject(error)
      })
    })
  },
  
  logout() {
    return new Promise((resolve, reject) => {
      instance.post('/logout')
      .then(response => {
        // eslint-disable-next-line no-console
        // console.log(response)
        resolve(response)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        // console.log(error)
        reject(error)
      })
    })
  },
}