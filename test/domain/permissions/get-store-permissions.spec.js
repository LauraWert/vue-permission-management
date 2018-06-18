import getStorePermissions from 'src/domains/permissions/get-store-permissions'
import { readPermissions } from 'src/domains//store/permission'

describe('get-store-permissions', () => {
  it('can get permissions from the store', () => {
    const store = {}
    addMockDataToStore(store, readPermissions.dataNamespace(), 123, {'storePermission': ['C', 'R']})

    const permissions = getStorePermissions(store, 123)

    expect(permissions).toEqual({'storePermission': ['C', 'R']})
  })
})

function addMockDataToStore (store, namespace, payload, data) {
  const storeData = {}
  storeData[payload] = data

  if (store.getters === undefined) {
    store.getters = {}
  }

  store.getters[namespace] = (requestPayload) => {
    return storeData[requestPayload]
  }
}
