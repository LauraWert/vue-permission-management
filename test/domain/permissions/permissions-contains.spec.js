import permissionsContains from 'src/domains/permissions/permissions-contains'

describe('permissions-contains', () => {
  it('return true when permission in permissions', () => {
    const permissions = {
      'noun': ['verb'],
    }

    const res = permissionsContains(permissions, 'verb', 'noun')

    expect(res).toBe(true)
  })

  it('return false when verb not in permissions', () => {
    const permissions = {
      'noun': ['verb'],
    }

    const res = permissionsContains(permissions, 'otherVerb', 'noun')

    expect(res).toBe(false)
  })

  it('return false when noun not in permissions', () => {
    const permissions = {
      'noun': ['verb'],
    }

    const res = permissionsContains(permissions, 'verb', 'otherNoun')

    expect(res).toBe(false)
  })
})
