export default {
  keys: {
    CURRENT_USER_ID_RESOLVER: 0,
    IS_AUTHENTICATED_RESOLVER: 1,
    PROJECT_API: 2,
    PROJECT_STORE: 3,
  },
  data: {},
  get: function (key) {
    return this.data[key]
  },
  set: function (key, val) {
    this.data[key] = val
  },
  reset: function (key) {
    this.data[key] = null
  },
}
