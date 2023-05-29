import axios, { AxiosResponse } from 'axios'
import { BASE_API_PATH } from '../base'
import { ApiConfig } from '../configuration'
import { MODULE_NAME } from './constants'
import { PermissionsQueryResponse } from './models/permissions-query-response'

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