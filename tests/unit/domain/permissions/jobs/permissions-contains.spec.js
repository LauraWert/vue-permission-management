import permissionsContains from 'src/domains/permissions/jobs/permissions-contains'
import { expect } from 'chai'

describe('permissions-contains', () => {
  it('return true when permission in permissions', () => {
    const permissions = {
      'noun': ['verb'],
    }

    const res = permissionsContains(permissions, 'verb', 'noun')

    expect(res).to.equal(true)
  })

  it('return false when verb not in permissions', () => {
    const permissions = {
      'noun': ['verb'],
    }

    const res = permissionsContains(permissions, 'otherVerb', 'noun')

    expect(res).to.equal(false)
  })

  it('return false when noun not in permissions', () => {
    const permissions = {
      'noun': ['verb'],
    }

    const res = permissionsContains(permissions, 'verb', 'otherNoun')

    expect(res).to.equal(false)
  })
})
