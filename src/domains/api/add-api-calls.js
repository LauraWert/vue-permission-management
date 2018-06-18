import { api } from '../config'

export default () => {
  api.readPermissions = (userId) => {
    return api.get('/user/' + userId + '/permission')
  }
}
