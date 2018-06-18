import { hasPermission, mockUserPermissions, loadPermissions, resetUserPermissions } from 'src'
import store from 'test/fake/store'
import api from 'test/fake/api-client'
import { setConfig } from 'src/domains/config'
import moxios from 'moxios'
import addApiCalls from 'src/domains/api/jobs/add-api-calls'

describe('permissions', () => {
  beforeEach(() => {
    moxios.install(api)
    setConfig(
      store,
      api,
      function () {
        return 123 // userIdResolver
      },
      function () {
        return true // isAuthenticatedResolver
      },
      {}, // options
    )
    addApiCalls(api)
  })

  afterEach(() => {
    moxios.uninstall()
    store.$reset()
  })

  it('Can load permissions from the api into the store', async () => {
    mockPermissionApiCall({apiPermission3: ['c']})

    await loadPermissions()

    expect(moxios.requests.mostRecent().config.url).toBe('/user/123/permission')
    expect(moxios.requests.mostRecent().config.method).toBe('get')
    expect(hasPermission('c', 'apiPermission3')).toBe(true)
  })

  it('can set mock permissions', async () => {
    mockPermissionApiCall({apiPermission1: ['c']})
    await loadPermissions()

    mockUserPermissions({
      mockPermission: ['c'],
    })

    expect(hasPermission('c', 'mockPermission')).toBe(true)
    expect(hasPermission('c', 'apiPermission1')).toBe(false)
    resetUserPermissions()
  })

  it('can reset the mocked permissions', async () => {
    mockPermissionApiCall({apiPermission2: ['c']})
    await loadPermissions()
    mockUserPermissions({
      mockPermission: ['c'],
    })

    resetUserPermissions()

    expect(hasPermission('c', 'mockPermission')).toBe(false)
    expect(hasPermission('c', 'apiPermission2')).toBe(true)
  })
})

function mockPermissionApiCall (response) {
  moxios.stubRequest('/user/123/permission', {
    status: 200,
    response,
  })
}
