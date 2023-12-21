import axios from 'axios'
// import { routes } from '../routes'


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
})

axiosInstance.interceptors.request.use(function (config) {
  config.headers = config.headers ?? {}
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

  return config
})

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    if (
      error.response.status === 401 &&
      !window.location.pathname.includes('/login')
    )
      window.location.replace('/login')
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export const get = (
  path: string,
  params?: String | Number | undefined,
  headers?: object
) => {
  return axiosInstance
    .get(`${path}${params ? '?' + params : ''}`, {
      headers,
    })
    .then((res) => res.data)
    .catch((err) => err)
}

export const post = (path: string, data?: object, headers?: object) => {
  return axiosInstance
    .post(path, data, {
      headers,
    })
    .then((res) => res.data)
    // .catch((err) => err)
}

// export const put = (path: string  , data: object, headers = {}) =>
//   axiosInstance.put(path, data, {
//     headers,
//   })

// export const deleteGeneric = (path, id, headers = {}) =>
//   axiosInstance.delete(
//     `${import.meta.env.VITE_API_URL}${path}/${id ? id : ''}`,
//     {
//       // mode: 'cors',
//       headers,
//     }
//   )
