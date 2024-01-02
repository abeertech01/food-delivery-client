import { useMutation } from "@apollo/client"
import { FormEvent, useState } from "react"
import { CREATE_USER } from "../../graphql/mutations"

const Auth = () => {
  const [firstName, setFirstName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [createUser] = useMutation(CREATE_USER, {
    variables: {
      firstName,
      email,
      password,
    },
  })

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { data } = await createUser()

      console.log("data ", data.createUser)
    } catch (error: any) {
      console.log("error: ", error)
    }
  }
  return (
    <div>
      <h1 className="border-b">Sign Up</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="First Name"
          onChange={({ target }) => setFirstName(target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Auth
