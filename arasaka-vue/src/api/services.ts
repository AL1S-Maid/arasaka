import axios from 'axios'

export const getSmallServiceCards = () => {
  return axios.get('http://localhost:3000/services/small')
}

export const getLargeServiceCards = () => {
  return axios.get('http://localhost:3000/services/large')
}