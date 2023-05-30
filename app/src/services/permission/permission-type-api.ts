import axios, { AxiosResponse } from 'axios'
import { BASE_API_PATH } from '../base'
import { ApiConfig } from '../configuration'
import { MODULE_NAME } from './constants'  
import { 
    CreatePermissionTypeCommandRequest, 
    PermissionTypesQueryResponse, 
    UpdatePermissionTypeCommandRequest 
} from './models'

const PATH_TYPES = 'types'

export const getPermissionTypesApiCall = async () => {
    const response: AxiosResponse<PermissionTypesQueryResponse[]> =
        await axios.get(
            `${BASE_API_PATH}/${MODULE_NAME}/${PATH_TYPES}`,
            ApiConfig({
                includeAuthHeader: true,
            })
        )
    return response.data
}

export const postSavePermissionTypeApiCall = async (request: CreatePermissionTypeCommandRequest) => {
    const response: AxiosResponse<number> =
        await axios.post(
            `${BASE_API_PATH}/${MODULE_NAME}/${PATH_TYPES}`,
            request,
            ApiConfig({
                includeAuthHeader: true,
            })
        )
    return response.data
}

export const putUpdatePermissionTypeApiCall = async (request: UpdatePermissionTypeCommandRequest) => {
    const response: AxiosResponse<number> =
        await axios.put(
            `${BASE_API_PATH}/${MODULE_NAME}/${PATH_TYPES}`,
            request,
            ApiConfig({
                includeAuthHeader: true,
            })
        )
    return response.data
}