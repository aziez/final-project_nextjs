import axios, { AxiosResponse } from 'axios'
const SteinStore = require('stein-js-client')

const store = new SteinStore(
  'https://api.steinhq.com/v1/storages/65dea65c4a64236312089bfd',
)

export const useData = async (apiUrl: string) => {
  try {
    const data = await store.read(apiUrl)

    // Do something with the data if needed
    // console.log(data, 'DATAAA');

    return data
  } catch (error) {
    // Handle the error
    console.error('Error fetching data:', error)
    throw error // Re-throw the error if you want the caller to handle it
  }
}

export const getData = async (apiUrl: string, id: string) => {
  try {
    const data = await store.read(apiUrl, { search: { apiUrl: id } })
    return data
  } catch (error) {
    return error
  }
}
