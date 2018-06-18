export default (api) => {
  api.readPermissions = (userId) => {
    return api.get('/user/' + userId + '/permission')
  }
}
