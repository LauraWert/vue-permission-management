import installer from 'src'
import getCurrentUserId from 'src/domains/auth/jobs/get-current-user-id'
import isAuthenticated from 'src/domains/auth/jobs/is-authenticated'
import getProjectApi from 'src/domains/api/jobs/get-project-api'
import getProjectStore from 'src/domains/store/jobs/get-project-store'
import { expect } from 'chai'
import sinon from 'sinon'

// jest.mock('vue-browser-acl', () => ({ _name: 'vueBrowserAclMock' }))

describe('install', () => {
  it('can install the package', () => {
    const VueMock = {
      use: sinon.stub(),
    }
    const router = {
      _name: 'router',
      beforeEach: sinon.stub(),
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

    expect(isAuthenticated()).to.deep.equal(isAuthenticatedResolver())
    expect(getCurrentUserId()).to.deep.equal(currentUserIdResolver())
    expect(getProjectStore()).to.equal(storeMock)
    expect(getProjectApi()).to.equal(apiMock)

    expect(VueMock.use).to.be.calledWith(
      sinon.match.any,
      getCurrentUserResolver,
      policySetter,
      {
        _name: 'options',
        caseMode: false,
        router: { '_name': 'router', beforeEach: router.beforeEach },
        strict: true,
        userIdResolver: null,
      },
    )
  })
})
