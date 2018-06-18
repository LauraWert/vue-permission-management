export const MockedUserPermissions = {
  permissions: null,
  get: function () {
    return this.permissions
  },
  set: function (val) {
    this.permissions = val
  },
  reset: function () {
    this.permissions = null
  },
}
