import { gql, useQuery } from "@apollo/client"

export const USERS_QUERY = gql`
  {
    users(limit: 10) {
      id
      firstname
    }
  }
`

const UserList = () => {
  const { loading, error, data } = useQuery(USERS_QUERY, {
    variables: { limit: 10 },
  })
  if (loading) return <div className="loading">Loading</div>
  if (error) return <div className="error">Error</div>

  return (
    <div>
      <h2 className="title">Users:</h2>
      <div>
        {data.users.map((user: { id: string, firstname: string }) => (
          <div key={user.id}>
            <p className="user" key={user.id}>
              {user.firstname}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList
