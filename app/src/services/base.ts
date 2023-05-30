import { 
  API_PATH,
  ENVIRONMENTS } from 'src/common/constants'

const getUrlEnv = (): string => {
  const locate = window.location.hostname.split('.')
  if (locate.length === 1) {
      return ENVIRONMENTS.dev
  }
  if (locate.length === 3) {
      return ENVIRONMENTS.prod
  }
  return ENVIRONMENTS[locate[0]]
}

const getBaseUrl = (projectPath: string): string => {
  const BASE_PATH = getUrlEnv()
  return `${BASE_PATH}${projectPath}`.replace(/\/+$/, "")
}

export const BASE_API_PATH = getBaseUrl(API_PATH)