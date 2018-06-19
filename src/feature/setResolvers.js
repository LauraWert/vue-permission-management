import setCurrentUserIdResolver from 'src/domains/auth/jobs/set-current-user-id-resolver'
import setIsAuthenticatedResolver from 'src/domains/auth/jobs/set-is-authenticated-resolver'

export default (currentUserIdResolver, isAuthenticatedResolver) => {
  setCurrentUserIdResolver(currentUserIdResolver)
  setIsAuthenticatedResolver(isAuthenticatedResolver)
}
