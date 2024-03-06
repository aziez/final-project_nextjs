const SteinStore = require('stein-js-client')

const store = new SteinStore(
  'https://api.steinhq.com/v1/storages/65e19b574a642363120a3aa5',
  // 'https://api.steinhq.com/v1/storages/65e19b574a642363120a3aa5usausausua',
)

export const useData = (sheetName: string) => {
  try {
    const data = store.read(sheetName)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const getData = async (
  sheetName: string,
  row: string,
  value: string,
) => {
  try {
    const searchObject: any = {}
    searchObject[row] = value

    const data = await store.read(sheetName, { search: searchObject })
    return data
  } catch (error) {
    return error
  }
}

export const editData = async (
  sheetName: string,
  rowId: string,
  value: string,
  rowEdit: string,
  valueEdit: string,
) => {
  try {
    const searchObject: any = {}
    const setUpdate: any = {}
    searchObject[rowId] = value
    setUpdate[rowEdit] = valueEdit

    const data = await store.edit(sheetName, {
      search: searchObject,
      set: setUpdate,
      limit: 1,
    })
    const customResponse = {
      code: 200,
      success: true,
      message: 'Data added successfully',
      data: data, // You can customize this part based on your requirements
    }

    return customResponse
  } catch (error) {
    console.error('Error editing data:', error)
    // Optionally, you can throw the error to let the calling code handle it
    throw error
  }
}

export const addData = async (sheetName: string, data: any) => {
  try {
    const res = await store.append(sheetName, [data])
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

export const deleteData = async (
  sheetName: string,
  row: string,
  value: string,
) => {
  try {
    const deleteObject: any = {}
    deleteObject[row] = value

    const data = await store.delete(sheetName, { search: deleteObject })

    const customResponse = {
      code: 200,
      success: true,
      message: 'deleted successfully',
      data: data, // You can customize this part based on your requirements
    }

    return customResponse
  } catch (error) {}
}
