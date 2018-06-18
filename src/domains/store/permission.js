import getProjectApi from 'src/domains/api/jobs/get-project-api'
import { VuexXhrCreator, VuexXhrGet } from 'vuex-xhr-state'

export const readPermissions = new VuexXhrGet({
  method: (userId) => {
    return getProjectApi().readPermissions(userId)
  },
  default: [],
})

export const permission = new VuexXhrCreator('permission', [readPermissions])
