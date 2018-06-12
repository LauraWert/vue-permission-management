import store from 'test/fake/store'
import client from 'src/domains/api/_mocks_/index'
import {
  hasPermission,
  loadPermissions,
  mockUserPermissions,
  resetUserPermissions,
} from 'src/domains/acl/permissions'
import { setConfig } from 'src/domains/config'

jest.mock('src/domains/api/index', () => require('src/domains/api/_mocks_/index'))

describe('permissions', () => {
  beforeEach(() => {
    setConfig(
      store,
      client,
      function () {
        return 123 // userIdResolver
      },
      function () {
        return true // isAuthenticatedResolver
      },
      {} // options
    )
  })

  afterEach(() => {
    resetUserPermissions()
    store.$reset()
  })

  it('loads permissions for the current user', () => {
    loadPermissions()

    expect(client.readPermissions).toBeCalledWith(123)
  })

  it('correctly checks the permissions', () => {
    mockUserPermissions({
      user: ['r'],
    })

    loadPermissions()

    expect(hasPermission('r', 'user')).toBe(true)
    expect(hasPermission('c', 'user')).toBe(false)
    expect(hasPermission('fake', 'user')).toBe(false)
    expect(hasPermission('c', 'fake')).toBe(false)
  })
})
