import { ResponseType } from 'axios'

export interface ApiProps {
  [key: string]: string
  local: string,
  dev: string 
  prod: string
}

export interface ApiConfigProps {
  includeAuthHeader: boolean,
  includeContentTypeHeader?: string,
  responseType?: ResponseType
}


export interface ApiCallError<T> {
  type?: string
  title?: string
  status?: number
  detail?: string
  instance?: string
  errors?: T
}