import { api } from '../../config/index'

export default () => {
  api.readPermissions = (userId) => {
    return api.get('/user/' + userId + '/permission')
  }
}
