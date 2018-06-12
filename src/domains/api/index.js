import { api } from '../config'

export const addApiCalls = () => {
  api.readPermissions = (userId) => {
    return api.get('/user/' + userId + '/permission')
  }
}
