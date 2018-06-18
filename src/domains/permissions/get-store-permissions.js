import { readPermissions } from 'src/domains/store/permission'

export default function (store, userId) {
  return readPermissions.data(store.getters, userId)
}
