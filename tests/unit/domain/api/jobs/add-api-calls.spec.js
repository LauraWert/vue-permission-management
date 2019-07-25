import addApiCalls from 'src/domains/api/jobs/add-api-calls'
import { expect } from 'chai'
import sinon from 'sinon'

describe('add-api-calls', () => {
  it('add api calls to the given api', () => {
    const mockApi = { projectFunc: () => {} }
    mockApi.get = sinon.stub().returns('GET result')
    addApiCalls(mockApi)

    mockApi.readPermissions(582)

    expect(typeof mockApi.projectFunc).to.equal('function')
    expect(mockApi.get).to.be.calledWith('/user/582/permission')
  })
})
