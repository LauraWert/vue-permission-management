import { loadPermissions } from 'src/feature/permissions'

export default (router) => {
  router.beforeEach((to, from, next) => {
    if (to.name === 'login') return next()

    if (!to.meta || !to.meta.can) {
      to.meta.can = 'meta not_set'
    }

    if (!to.meta.fail) {
      to.meta.fail = '/auth/login'
    }

    return loadPermissions()
      .then(() => { return next() })
      .catch((err) => {
        if (err.response !== undefined && err.response.status === 401) {
          return next({ name: 'login' })
        }
      })
  })
}
