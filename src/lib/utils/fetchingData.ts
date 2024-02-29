import axios, { AxiosResponse } from 'axios'
const SteinStore = require('stein-js-client')

const store = new SteinStore(
  'https://api.steinhq.com/v1/storages/65dea65c4a64236312089bfd',
)

export const useData = async (apiUrl: string) => {
  try {
    const data = await store.read(apiUrl)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
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

export const addData = async (apiUrl: string, data: any) => {
  
  try {
    const res = await store.append(apiUrl, [data])
    const customResponse = {
      code: 200,
      success: true,
      message: 'Data added successfully',
      data: res, // You can customize this part based on your requirements
    }

    return customResponse
  } catch (error) {
    const errorResponse = {
      code: 400,
      success: false,
      message: 'Error adding data',
      error: error,
    }

    return errorResponse
  }
}
