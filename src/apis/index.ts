import axios from 'axios'

const DOMAIN_BASE = `https://mock.apifox.com/m1/3866134-0-default`
export function GET_SMARTCITY_INFO() {
  return axios.get(`${DOMAIN_BASE}/smartcity/info`)
}

export function GET_SMARTCITY_LIST() {
  return axios.get(`${DOMAIN_BASE}/smartcity/list`)
}
