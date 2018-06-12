const client = {}
export default client

export const addApiCalls = () => {
  client.readPermissions = jest.fn().mockResolvedValue({
    data: {users: ['c', 'r', 'u', 'd']},
  })
}
