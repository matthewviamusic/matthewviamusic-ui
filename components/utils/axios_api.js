import axios from "axios"

export const api_vps = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_TRACKS_URL
})

export const getSearch = async () => {
  const response = await api_vps.get()

  return response.data.reverse()
}
