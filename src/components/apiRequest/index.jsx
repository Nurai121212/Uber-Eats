import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:1717'
})

const usersApi = {
  login: (data) => {
    return instance.post('/login', data)
      .then((data) => {
        return data.data
      })
  },
  register: (data) => {
    return instance.post('/signin', data)
      .then((data) => {
        return data.data
      })
  },
  getProfile: (token) => {
    return instance.get('/me', {
      headers: {
        'X-Auth': token
      }
    }).then((data) => {
      return data.data
    })
  },
  getPlaces: () => {
    return instance.get('/eats/places')
      .then((data) => {
        return data.data
      })
  },
  getDishes: (id) => {
    return instance.get('/eats/dishes/' + id)
      .then((res) => {
        return res.data
      })
  }
}

export default usersApi;