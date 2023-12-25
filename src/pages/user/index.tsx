import React from "react"
import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../../graphql/mutations"

type UserProps = {}

const User: React.FC<UserProps> = () => {
  const [createUser] = useMutation(CREATE_USER, {
    variables: {
      firstName: "John",
      lastName: "Smith",
      email: "john4@gmail.com",
      password: "password",
    },
  })
  const creating = async () => {
    try {
      const { data } = await createUser()

      console.log("data ", data.createUser)
    } catch (error: any) {
      console.log("error: ", error)
    }
  }

  return (
    <div>
      <button onClick={creating}>Click</button>
    </div>
  )
}
export default User
