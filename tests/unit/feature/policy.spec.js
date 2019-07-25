// import { permissionPolicy, createGlobalPolicy, loadStorePermissions, createCrudPermissionPolicy } from 'src'
import api from 'tests/fake/api-client'
import store from 'tests/fake/store'
import {
  createCrudPermissionPolicy,
  createGlobalPolicy,
  permissionPolicy,
} from 'src'
import { loadPermissions } from 'src/feature/permissions'
import moxios from 'moxios'
import addApiCalls from 'src/domains/api/jobs/add-api-calls'
import setCurrentUserIdResolver from 'src/domains/auth/jobs/set-current-user-id-resolver'
import setIsAuthenticatedResolver from 'src/domains/auth/jobs/set-is-authenticated-resolver'
import setProjectApi from 'src/domains/api/jobs/set-project-api'
import setProjectStore from 'src/domains/store/jobs/set-project-store'
import { expect } from 'chai'

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

    expect(policy.public).to.equal(true)
    expect(policy.authenticated()).to.equal('authResultTestString')
  })

  it('can make crud permission policy', async () => {
    setTestConfig(true)
    moxios.stubRequest('/user/123/permission', {
      status: 200,
      response: { crudPermission: ['c', 'u'] },
    })
    await loadPermissions()

    const policy = createCrudPermissionPolicy('crudPermission')

    expect(policy.create()).to.equal(true)
    expect(policy.read()).to.equal(false)
    expect(policy.update()).to.equal(true)
    expect(policy.delete()).to.equal(false)
  })

  it('make permission policy that returns true when authenticated and have correct permission', async () => {
    setTestConfig(true)
    moxios.stubRequest('/user/123/permission', {
      status: 200,
      response: { policyPermission: ['c'] },
    })
    await loadPermissions()

    const permissionPolicyTester = permissionPolicy('c', 'policyPermission')

    expect(permissionPolicyTester()).to.equal(true)
  })

  it('make permission policy that returns false when not authenticated', async () => {
    setTestConfig(false)

    const permissionPolicyTester = permissionPolicy('c', 'not relevant')

    expect(permissionPolicyTester()).to.equal(false)
  })

  it('make permission policy that returns false when authenticated but not have correct permission', async () => {
    setTestConfig(true)
    moxios.stubRequest('/user/123/permission', {
      status: 200,
      response: { policyPermission: ['c'] },
    })
    await loadPermissions()

    const permissionPolicyTester = permissionPolicy('c', 'otherPermission')

    expect(permissionPolicyTester()).to.equal(false)
  })
})

function setTestConfig(authResult) {
  addApiCalls(api)

  setProjectApi(api)
  setProjectStore(store)
  setCurrentUserIdResolver(() => {
    return 123 // userIdResolver
  })
  setIsAuthenticatedResolver(() => {
    return authResult // isAuthenticatedResolver
  })
}
