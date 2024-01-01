import React from "react"

type AuthProps = {}

const Auth: React.FC<AuthProps> = () => {
  return (
    <div>
      <h1 className="text-red-500">Auth</h1>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
    </div>
  )
}
export default Auth
