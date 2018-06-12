import { api } from '../domains/config'
import { VuexXhrCreator, VuexXhrGet } from 'vuex-xhr-state'

export const readPermissions = new VuexXhrGet({
  method: (userId) => {
    return api.readPermissions(userId)
  },
  default: [],
})

export const permission = new VuexXhrCreator('permission', [readPermissions])
