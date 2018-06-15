import loadStorePermissions from 'src/domains/permissions/load-store-permissions'
import { readPermissions } from 'src/store/permission'

describe('load-store-permissions', () => {
  it('can get permissions from the store', () => {
    const store = {
      dispatch: jest.fn().mockReturnValue('dispatchReturn'),
    }

    const result = loadStorePermissions(store, 123)

    expect(result).toBe('dispatchReturn')
    expect(store.dispatch).toBeCalledWith(
      readPermissions.fetch(),
      123,
    )
  })
})
