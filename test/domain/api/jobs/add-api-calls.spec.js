import addApiCalls from 'src/domains/api/jobs/add-api-calls'

describe('add-api-calls', () => {
  it('add api calls to the given api', () => {
    const mockApi = {projectFunc: () => {}}
    mockApi.get = jest.fn().mockReturnValue('GET result')
    addApiCalls(mockApi)

    mockApi.readPermissions(582)

    expect(typeof mockApi.projectFunc).toBe('function')
    expect(mockApi.get).toBeCalledWith('/user/582/permission')
  })
})
