import { gql } from "@apollo/client"

export const GET_HELLO = gql`
  query GetHello {
    hello
  }
`

export const GET_SAY = gql`
  query GetSay($name: String!) {
    say(name: $name)
  }
`
