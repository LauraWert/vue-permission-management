// import { permissionPolicy, createGlobalPolicy, loadStorePermissions, createCrudPermissionPolicy } from 'src'
import { setConfig } from 'src/domains/config'
import api from 'test/fake/api-client'
import store from 'test/fake/store'
import { permissionPolicy, createGlobalPolicy, createCrudPermissionPolicy } from 'src'
import { loadPermissions } from 'src/feature/permissions'
import moxios from 'moxios'
import addApiCalls from 'src/domains/api/jobs/add-api-calls'
import setCurrentUserIdResolver from 'src/domains/auth/jobs/set-current-user-id-resolver'
import setIsAuthenticatedResolver from 'src/domains/auth/jobs/set-is-authenticated-resolver'

describe('policies', () => {
  beforeEach(() => {
    moxios.install(api)
  })

  afterEach(() => {
    moxios.uninstall()
    store.$reset()
  })

  it('can make a global policy', () => {
    setTestConfig('authResultTestString')

    const policy = createGlobalPolicy()

    expect(policy.public).toEqual(true)
    expect(policy.authenticated()).toEqual('authResultTestString')
  })

  it('can make crud permission policy', async () => {
    setTestConfig(true)
    moxios.stubRequest('/user/123/permission', {
      status: 200,
      response: {crudPermission: ['c', 'u']},
    })
    await loadPermissions()

    const policy = createCrudPermissionPolicy('crudPermission')

    expect(policy.create()).toBe(true)
    expect(policy.read()).toBe(false)
    expect(policy.update()).toBe(true)
    expect(policy.delete()).toBe(false)
  })

  it('make permission policy that returns true when authenticated and have correct permission', async () => {
    setTestConfig(true)
    moxios.stubRequest('/user/123/permission', {
      status: 200,
      response: {policyPermission: ['c']},
    })
    await loadPermissions()

    const permissionPolicyTester = permissionPolicy('c', 'policyPermission')

    expect(permissionPolicyTester()).toBe(true)
  })

  it('make permission policy that returns false when not authenticated', async () => {
    setTestConfig(false)

    const permissionPolicyTester = permissionPolicy('c', 'not relevant')

    expect(permissionPolicyTester()).toBe(false)
  })

  it('make permission policy that returns false when authenticated but not have correct permission', async () => {
    setTestConfig(true)
    moxios.stubRequest('/user/123/permission', {
      status: 200,
      response: {policyPermission: ['c']},
    })
    await loadPermissions()

    const permissionPolicyTester = permissionPolicy('c', 'otherPermission')

    expect(permissionPolicyTester()).toBe(false)
  })
})

function setTestConfig (authResult) {
  setConfig(
    store,
    api,
  )
  setCurrentUserIdResolver(() => {
    return 123 // userIdResolver
  })
  setIsAuthenticatedResolver(() => {
    return authResult // isAuthenticatedResolver
  })
  addApiCalls(api)
}
