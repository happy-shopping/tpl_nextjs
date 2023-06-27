import axios from "axios"

const configureAxios = () => {
  const { NEXT_PUBLIC_API_URL } = process.env

  axios.defaults.baseURL = NEXT_PUBLIC_API_URL

  axios.interceptors.request.use(
    (req) => req,
    (err) => Promise.reject(err)
  )

  axios.interceptors.response.use(
    (res) => res,
    async (err) => Promise.reject(err)
  )
}

export default configureAxios
