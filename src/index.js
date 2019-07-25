import install from 'src/feature/install'
import setResolvers from 'src/feature/setResolvers'

export default install
export {
  mockUserPermissions,
  resetMockedUserPermissions,
  hasPermission,
  loadPermissions,
} from './feature/permissions'
export {
  createGlobalPolicy,
  permissionPolicy,
  createCrudPermissionPolicy,
} from './feature/policies'
export { getStorePlugins } from 'src/feature/store'
export { setResolvers }
