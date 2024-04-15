// import { loginStore } from '~/stores/loginStore'
import DateFnsAdapter from '@date-io/date-fns'
// const loginAuth = loginStore()
// const { data } = loginAuth
const { getDiff, isAfter } = new DateFnsAdapter()

const isTokenExpired = (): boolean => {
  const expirationTime = localStorage.getItem('expired')
  if (expirationTime) {
    return isAfter(new Date(), new Date(expirationTime))
  }
  return true
}

const getExpired = () => {
  return localStorage.getItem('expired')
}

const getAuth = () => {
  const data = localStorage.getItem('_token')
  if (data) {
    return JSON.parse(data)
  }
  return {}
}

const removeAuth = () => {
  localStorage.removeItem('_token')
  localStorage.removeItem('expired')
}

const getStatusLogin = () => {
  const data = getAuth()
  if (data) {
    if (getDiff(new Date(), new Date(data)) <= 0) {
      return data.loginStatus
    }
    removeAuth()
    return false
  }
  return false
}

const checkAuth = () => {
  const data = localStorage.getItem('_token')
  return data
}

export const useAuth = {
  checkAuth,
  getStatusLogin,
  removeAuth,
  getAuth,
  isTokenExpired
}
