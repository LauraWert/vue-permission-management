import { readPermissions } from 'src/store/permission'

export default function (store, userId) {
  return readPermissions.data(store.getters, userId)
}
