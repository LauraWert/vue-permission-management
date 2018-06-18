import { setConfig, store, api } from 'src/domains/config'

describe('config', () => {
  it('sets global variables', () => {
    const storeMock = {
      _name: 'store',
    }
    const apiMock = {
      _name: 'api',
    }
    // const getCurrentUserIdResolver = () => ({
    //   _name: 'currentUserIdResolver',
    // })
    // const isAuthenticatedResolver = {
    //   _name: 'isAuthenticatedResolver',
    // }

    setConfig(storeMock, apiMock)

    // expect(isAuthenticated).toBe(isAuthenticatedResolver)
    // expect(getCurrentUserId()).toEqual(getCurrentUserIdResolver())
    expect(store).toBe(storeMock)
    expect(api).toBe(apiMock)
  })
})
