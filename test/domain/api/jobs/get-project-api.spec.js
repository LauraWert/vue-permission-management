import keyValueStore from 'src/key-value-store'
import getProjectApi from 'src/domains/api/jobs/get-project-api'

describe('get-project-api', () => {
  it('gets project api from the key value store', () => {
    const mockApi = {_name: 'myProjectApi'}
    keyValueStore.set(keyValueStore.keys.PROJECT_API, mockApi)

    const projectApi = getProjectApi()

    expect(projectApi).toBe(mockApi)
  })
})
