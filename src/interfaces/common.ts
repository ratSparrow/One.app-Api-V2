import { IGenericErrorMessage } from './error'

export type UserName = {
  firstName: string
  lastName?: string
  middleName?: string
}

export type IGenericResponse<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}


