import { MockedUserPermissions } from 'src/domains/permissions/jobs/mocked-user-permissions'

let testMockedUserPermissions

describe('mocked-user-permissions', () => {
  beforeEach(() => {
    testMockedUserPermissions = Object.assign({}, MockedUserPermissions)
  })

  it('Gets mocked user permissions', () => {
    const testPermissions = {
      testPermissions: ['c', 'r', 'u', 'd'],
    }
    testMockedUserPermissions.set(testPermissions)
    expect(testMockedUserPermissions.get()).toBe(testPermissions)
  })

  it('Sets mocked user permissions', () => {
    const testPermissions = {
      user: ['c', 'r', 'u', 'd'],
      schoolList: ['c', 'r', 'u', 'd'],
      schoolDetail: ['r', 'u'],
    }
    expect(MockedUserPermissions.get()).toBeNull()
    expect(testMockedUserPermissions.get()).toBeNull()
    testMockedUserPermissions.set(testPermissions)
    expect(testMockedUserPermissions.get()).toBe(testPermissions)
  })

  it('Resets mocked user permissions', () => {
    const testPermissions = {
      testPermissions: ['c', 'r', 'u', 'd'],
    }
    testMockedUserPermissions.set(testPermissions)
    expect(testMockedUserPermissions.get()).toBe(testPermissions)
    testMockedUserPermissions.reset()
    expect(testMockedUserPermissions.get()).toBeNull()
  })
})
