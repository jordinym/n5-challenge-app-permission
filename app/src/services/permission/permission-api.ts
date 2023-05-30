import axios, { AxiosResponse } from 'axios'
import { BASE_API_PATH } from '../base'
import { ApiConfig } from '../configuration'
import { MODULE_NAME } from './constants'  
import { 
    CreatePermissionCommandRequest, 
    PermissionsQueryResponse, 
    UpdatePermissionCommandRequest 
} from './models'

export const getPermissionsApiCall = async () => {
    const response: AxiosResponse<PermissionsQueryResponse[]> =
        await axios.get(
            `${BASE_API_PATH}/${MODULE_NAME}`,
            ApiConfig({
                includeAuthHeader: true,
            })
        )
    return response.data
}

export const postSavePermissionApiCall = async (request: CreatePermissionCommandRequest) => {
    const response: AxiosResponse<number> =
        await axios.post(
            `${BASE_API_PATH}/${MODULE_NAME}`,
            request,
            ApiConfig({
                includeAuthHeader: true,
            })
        )
    return response.data
}

export const putUpdatePermissionApiCall = async (request: UpdatePermissionCommandRequest) => {
    const response: AxiosResponse<number> =
        await axios.put(
            `${BASE_API_PATH}/${MODULE_NAME}`,
            request,
            ApiConfig({
                includeAuthHeader: true,
            })
        )
    return response.data
}