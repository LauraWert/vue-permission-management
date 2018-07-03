import installer from 'src'
import getCurrentUserId from 'src/domains/auth/jobs/get-current-user-id'
import isAuthenticated from 'src/domains/auth/jobs/is-authenticated'
import getProjectApi from 'src/domains/api/jobs/get-project-api'
import getProjectStore from 'src/domains/store/jobs/get-project-store'

jest.mock('vue-browser-acl', () => ({_name: 'vueBrowserAclMock'}))

describe('install', () => {
  it('can install the package', () => {
    const VueMock = {
      use: jest.fn(),
    }
    const router = {
      _name: 'router',
      beforeEach: jest.fn(),
    }
    const storeMock = {
      _name: 'store',
    }
    const policySetter = {
      _name: 'policySetter',
    }
    const apiMock = {
      _name: 'api',
    }
    const getCurrentUserResolver = () => ({
      _name: 'getCurrentUserResolver',
    })
    const currentUserIdResolver = () => ({
      _name: 'currentUserIdResolver',
    })
    const isAuthenticatedResolver = () => ({
      _name: 'isAuthenticatedResolver',
    })
    const options = {
      _name: 'options',
    }

    installer.install(VueMock, router, storeMock, policySetter, apiMock, getCurrentUserResolver, currentUserIdResolver, isAuthenticatedResolver, options)

    expect(isAuthenticated()).toEqual(isAuthenticatedResolver())
    expect(getCurrentUserId()).toEqual(currentUserIdResolver())
    expect(getProjectStore()).toBe(storeMock)
    expect(getProjectApi()).toBe(apiMock)

    expect(VueMock.use).toBeCalledWith(
      {_name: 'vueBrowserAclMock'},
      getCurrentUserResolver,
      policySetter,
      {
        _name: 'options',
        caseMode: false,
        router: {'_name': 'router', beforeEach: router.beforeEach},
        strict: true,
        userIdResolver: null,
      },
    )
  })
})
