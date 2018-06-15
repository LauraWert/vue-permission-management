import { setConfig, isAuthenticated, getCurrentUserId, store, api } from 'src/domains/config'

describe('config', () => {
  it('sets global variables', () => {
    const storeMock = {
      _name: 'store',
    }
    const apiMock = {
      _name: 'api',
    }
    const getCurrentUserIdResolver = {
      _name: 'getCurrentUserIdResolver',
    }
    const isAuthenticatedResolver = {
      _name: 'isAuthenticatedResolver',
    }

    setConfig(storeMock, apiMock, getCurrentUserIdResolver, isAuthenticatedResolver)

    expect(isAuthenticated).toBe(isAuthenticatedResolver)
    expect(getCurrentUserId).toBe(getCurrentUserIdResolver)
    expect(store).toBe(storeMock)
    expect(api).toBe(apiMock)
  })
})
