import keyValueStore from 'src/key-value-store'
import isAuthenticated from 'src/domains/auth/jobs/is-authenticated'

export default (permissions) => {
  if (!isAuthenticated()) throw new Error('Mocking permissions without being authenticated')
  keyValueStore.set(keyValueStore.keys.PERMISSIONS_MOCK, permissions)
}
