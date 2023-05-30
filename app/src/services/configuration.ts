import { AxiosRequestConfig } from 'axios' 
import { ApiConfigProps } from 'src/common/interfaces'

export const ApiConfig = ({includeAuthHeader, includeContentTypeHeader, responseType}: ApiConfigProps) => {
  let axiosConfig = {}
  if(includeAuthHeader) {
    Object.assign(
      axiosConfig,
      includeContentTypeHeader
        ? {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwToken')}`,
            'Content-Type': includeContentTypeHeader,
          }
        }
        : {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwToken')}`
        }
    })
  }
  if(responseType) {
    Object.assign(axiosConfig, { ...axiosConfig, responseType })
  }
  return axiosConfig as AxiosRequestConfig
}