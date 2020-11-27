import { USERS_QUERY } from "./UserList"

export const mocks = [
  {
    request: {
      query: USERS_QUERY,
      variables: {
        limit: 10,
      },
    },
    result: {
      data: {
        users: [
          {
            id: 1,
            firstname: "Mike",
          },
          {
            id: 2,
            firstname: "Norman",
          },
          {
            id: 3,
            firstname: "Polly",
          },
          {
            id: 4,
            firstname: "Austin",
          },
          {
            id: 5,
            firstname: "Jordan",
          },
          {
            id: 6,
            firstname: "Ellen",
          },
          {
            id: 7,
            firstname: "Norman",
          },
          {
            id: 8,
            firstname: "Dollie",
          },
          {
            id: 9,
            firstname: "Hilda",
          },
          {
            id: 10,
            firstname: "Lucy",
          },
        ],
      },
    },
  },
]
