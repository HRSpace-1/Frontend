import axios, { AxiosResponse } from 'axios'
import { IFormDataRequiredState } from '../utils/types'

export const BASE_URL = 'https://hrspace.sytes.net'

function setHeaders() {
  return {
    'Content-Type': 'application/json'
  }
}

const instance = axios.create({
  baseURL: BASE_URL + '/api/applications'
})

//Получить данные всех сотрудников моего подразделения
export const postApplication = (
  obj: IFormDataRequiredState
): Promise<AxiosResponse<IFormDataRequiredState>> => {
  return instance({
    method: 'POST',
    url: `employees/`,
    headers: setHeaders(),
    data: obj
  })
}
