import keyValueStore from 'src/key-value-store'

describe('set-project-api', () => {
  it('sets theproject-api in the key value store', () => {
    const mockApi = {_name: 'my test api'}
    keyValueStore.set(keyValueStore.keys.PROJECT_API, mockApi)

    const api = keyValueStore.get(keyValueStore.keys.PROJECT_API)
    expect(api).toBe(mockApi)
  })
})
