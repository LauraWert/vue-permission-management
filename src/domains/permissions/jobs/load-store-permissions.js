import { readPermissions } from 'src/domains//store/permission'

export default function (store, userId) {
  return store.dispatch(readPermissions.fetch(), userId)
}
