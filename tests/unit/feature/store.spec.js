import { getStorePlugins } from 'src'
import { expect } from 'chai'

describe('store', () => {
  it('can return the store plugins', () => {
    expect(getStorePlugins().length).to.equal(1)
    expect(getStorePlugins()[0].modules['xhr0'].namespace).to.equal('permission/xhr0')
  })
})
