import { readPermissions } from 'src/store/permission'

export default function (store, userId) {
  return store.dispatch(readPermissions.fetch(), userId)
}
