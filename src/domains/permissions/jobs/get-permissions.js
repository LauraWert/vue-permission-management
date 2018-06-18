import { readPermissions } from 'src/domains/store/permission'
import keyValueStore from 'src/key-value-store'

export default function (store, userId) {
  const mockPermissions = keyValueStore.get(keyValueStore.keys.PERMISSIONS_MOCK)
  if (mockPermissions !== null) return mockPermissions
  return readPermissions.data(store.getters, userId)
}
