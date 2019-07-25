import {
  hasPermission,
  loadPermissions,
  mockUserPermissions,
  resetMockedUserPermissions,
} from 'src'
import store from 'tests/fake/store'
import api from 'tests/fake/api-client'
import moxios from 'moxios'
import addApiCalls from 'src/domains/api/jobs/add-api-calls'
import setCurrentUserIdResolver from 'src/domains/auth/jobs/set-current-user-id-resolver'
import setIsAuthenticatedResolver from 'src/domains/auth/jobs/set-is-authenticated-resolver'
import setProjectApi from 'src/domains/api/jobs/set-project-api'
import setProjectStore from 'src/domains/store/jobs/set-project-store'
import { expect } from 'chai'

describe('permissions', () => {
  beforeEach(() => {
    moxios.install(api)
    addApiCalls(api)

    setProjectApi(api)
    setProjectStore(store)
    setCurrentUserIdResolver(() => {
      return 123 // userIdResolver
    })
    setIsAuthenticatedResolver(() => {
      return true
    })
  })

  afterEach(() => {
    moxios.uninstall()
    store.$reset()
  })

  it('Can load permissions from the api into the store', async () => {
    mockPermissionApiCall({ apiPermission3: ['c'] })

    await loadPermissions()

    expect(moxios.requests.mostRecent().config.url).to.equal('/user/123/permission')
    expect(moxios.requests.mostRecent().config.method).to.equal('get')
    expect(hasPermission('c', 'apiPermission3')).to.equal(true)
  })

  it('can set mock permissions', async () => {
    mockPermissionApiCall({ apiPermission1: ['c'] })
    await loadPermissions()

    mockUserPermissions({
      mockPermission: ['c'],
    })

    expect(hasPermission('c', 'mockPermission')).to.equal(true)
    expect(hasPermission('c', 'apiPermission1')).to.equal(false)
    resetMockedUserPermissions()
  })

  it('can reset the mocked permissions', async () => {
    mockPermissionApiCall({ apiPermission2: ['c'] })
    await loadPermissions()
    mockUserPermissions({
      mockPermission: ['c'],
    })

    resetMockedUserPermissions()

    expect(hasPermission('c', 'mockPermission')).to.equal(false)
    expect(hasPermission('c', 'apiPermission2')).to.equal(true)
  })
})

function mockPermissionApiCall(response) {
  moxios.stubRequest('/user/123/permission', {
    status: 200,
    response,
  })
}
