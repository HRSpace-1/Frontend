import { IFormDataRequiredState, IFormDataResponseApi } from './types'

class Api {
  private _baseUrl: string

  constructor(url: string) {
    this._baseUrl = url
  }

  _checkStatus<T>(res: Response): Promise<T> {
    if (res.ok) {
      return res.json()
    }

    return Promise.reject(`Ошибка: ${res.status}`)
  }

  postApplication(
    formDataobj: IFormDataRequiredState
  ): Promise<IFormDataResponseApi | void> {
    return fetch(this._baseUrl + '/applications/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataobj)
    }).then(res => {
      this._checkStatus<IFormDataResponseApi>(res)
    })
  }

  getSkills(): Promise<Array<string> | void> {
    return fetch(this._baseUrl + '/directories/skills/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this._checkStatus<Array<string>>(res)
    })
  }

  getJobTitle(): Promise<Array<string> | void> {
    return fetch(this._baseUrl + '/directories/job-titles/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this._checkStatus<Array<string>>(res)
    })
  }

  getSpecializations(): Promise<Array<string> | void> {
    return fetch(this._baseUrl + '/directories/specializations/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this._checkStatus<Array<string>>(res)
    })
  }
}

const api = new Api('https://hrspace.sytes.net/api')

export default api
