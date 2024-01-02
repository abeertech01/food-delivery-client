import { gql } from "@apollo/client"

export const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String
    $profileImageURL: String
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      profileImageURL: $profileImageURL
      email: $email
      password: $password
    )
  }
`
