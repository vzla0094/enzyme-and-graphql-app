import { gql, useQuery } from "@apollo/client"
import {GQLQuery} from "../../generated/graphql"

export const USERS_QUERY = gql`
  query {
    users(limit: 10) {
      id
      firstname
    }
  }
`

const UserList = () => {
  const { loading, error, data } = useQuery<GQLQuery>(USERS_QUERY, {
    variables: { limit: 10 },
  })
  if (loading) return <div className="loading">Loading</div>
  if (error) return <div className="error">Error</div>

  return (
    <div>
      <h2 className="title">Users:</h2>
      <div>
        {data?.users?.map((user) => (
          <div key={user?.id}>
            <p className="user" key={user?.id}>
              {user?.firstname}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList
