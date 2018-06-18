import { getStorePlugins } from 'src'

describe('store', () => {
  it('can return the store plugins', () => {
    expect(getStorePlugins().length).toBe(1)
    expect(getStorePlugins()[0].modules['xhr0'].namespace).toBe('permission/xhr0')
  })
})
