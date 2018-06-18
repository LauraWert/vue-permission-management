import { permissionManagementStorePlugins } from 'src'

describe('store', () => {
  it('can return the store plugins', () => {
    expect(permissionManagementStorePlugins.length).toBe(1)
    expect(permissionManagementStorePlugins[0].modules['xhr0'].namespace).toBe('permission/xhr0')
  })
})
