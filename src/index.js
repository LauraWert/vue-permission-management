import { getStorePlugins } from 'src/feature/store'

export { default } from 'src/feature/install'
export { mockUserPermissions, resetUserPermissions, hasPermission, loadPermissions } from './feature/permissions'
export { createGlobalPolicy, permissionPolicy, createCrudPermissionPolicy } from './feature/policies'
export const permissionManagementStorePlugins = getStorePlugins()
