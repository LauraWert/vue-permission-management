import loadStorePermissions from 'src/domains/permissions/jobs/load-store-permissions'
import { readPermissions } from 'src/domains//store/permission'
import { expect } from 'chai'
import sinon from 'sinon'

describe('load-store-permissions', () => {
  it('can get permissions from the store', () => {
    const store = {
      // eslint-disable-next-line no-undef
      dispatch: sinon.stub().returns('dispatchReturn'),
    }

    const result = loadStorePermissions(store, 123)

    expect(result).to.equal('dispatchReturn')
    expect(store.dispatch).to.be.calledWith(
      readPermissions.fetch(),
      123,
    )
  })
})
