import axios from 'axios'

const api = axios.create({
  baseURL: 'https://strapi.myidea.fr',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const getRestaurants = async () => {
  try {
    const response = await api.get('/restaurants')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getRestaurantById = async (id) => {
  try {
    const response = await api.get(`/restaurants/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/local', credentials)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getRestaurants,
  getRestaurantById,
  loginUser
}
