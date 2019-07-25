import { loadPermissions } from 'src/feature/permissions'

export default function(router) {
  router.beforeEach((to, from, next) => {
    if (!to.meta || !to.meta.can) {
      to.meta.can = 'meta not_set'
    }

    if (!to.meta.fail) {
      to.meta.fail = '/auth/login'
    }

    return loadPermissions()
      .then(() => next())
  })
}
